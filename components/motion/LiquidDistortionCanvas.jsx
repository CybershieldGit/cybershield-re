"use client";

import React, { useRef, useEffect } from "react";

export default function LiquidDistortionCanvas({
  imageSrc = "/images/hero-cinematic-hq.jpg",
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { alpha: false, antialias: true, powerPreference: "high-performance" }) ||
      canvas.getContext("experimental-webgl");

    if (!gl) {
      console.warn("WebGL not supported for Liquid Distortion");
      return;
    }

    let animationFrameId;
    let isDestroyed = false;

    // ─── SHADERS ───
    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        v_uv.y = 1.0 - v_uv.y;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      uniform sampler2D u_texture;
      uniform vec2 u_resolution;
      uniform vec2 u_imageResolution;
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;
      uniform float u_time;
      uniform float u_fluid;
      varying vec2 v_uv;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        // Aspect ratio cover calculation
        vec2 ratio = vec2(
          min((u_resolution.x / u_resolution.y) / (u_imageResolution.x / u_imageResolution.y), 1.0),
          min((u_resolution.y / u_resolution.x) / (u_imageResolution.y / u_imageResolution.x), 1.0)
        );
        vec2 uv = vec2(
          v_uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
          v_uv.y * ratio.y + (1.0 - ratio.y) * 0.5
        );

        // Interactive mouse coordinates
        vec2 mouseUv = u_mouse / u_resolution;
        mouseUv.y = 1.0 - mouseUv.y;
        float dist = distance(v_uv, mouseUv);

        // Fluid distortion radius and falloff (tighter, refined range)
        float radius = 0.17;
        float strength = smoothstep(radius, 0.0, dist) * u_fluid;

        // Ambient gentle fluid waves (slow & silky)
        float t = u_time * 0.28;
        float n1 = snoise(uv * 2.8 + vec2(t * 0.14, t * 0.18));
        float n2 = snoise(uv * 3.8 - vec2(t * 0.16, t * 0.12));
        vec2 fluidDisp = vec2(n1, n2) * (0.0025 + strength * 0.022);

        // Velocity drag vector
        vec2 velocity = (u_mouse - u_prevMouse) / u_resolution;
        velocity.y = -velocity.y;
        fluidDisp += velocity * strength * 0.38;

        // Chromatic dispersion for glass / liquid refraction (subtle, high-precision)
        float r = texture2D(u_texture, uv + fluidDisp * 1.04).r;
        float g = texture2D(u_texture, uv + fluidDisp).g;
        float b = texture2D(u_texture, uv + fluidDisp * 0.96).b;

        // Subtle specular sheen on wave crests
        float highlight = smoothstep(0.8, 1.0, abs(n1)) * 0.035 * (0.2 + strength * 1.5);

        gl_FragColor = vec4(vec3(r, g, b) + highlight, 1.0);
      }
    `;

    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad geometry (2 triangles covering -1 to 1)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uImageResolution = gl.getUniformLocation(program, "u_imageResolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uPrevMouse = gl.getUniformLocation(program, "u_prevMouse");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uFluid = gl.getUniformLocation(program, "u_fluid");

    // Texture loading
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Default 1x1 placeholder pixel while loading
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([11, 21, 34, 255]));

    let imgWidth = 1920;
    let imgHeight = 1080;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => {
      if (isDestroyed) return;
      imgWidth = img.naturalWidth || 1920;
      imgHeight = img.naturalHeight || 1080;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    };

    // Physics state for smooth liquid inertia
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, prevX: 0, prevY: 0 };
    let fluidIntensity = 0;
    let targetFluidIntensity = 0;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== Math.floor(displayWidth * dpr) || canvas.height !== Math.floor(displayHeight * dpr)) {
        canvas.width = Math.floor(displayWidth * dpr);
        canvas.height = Math.floor(displayHeight * dpr);
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      // Speed calculation for dynamic fluid disturbance
      const dx = clientX - mouse.targetX;
      const dy = clientY - mouse.targetY;
      const speed = Math.hypot(dx, dy);

      mouse.targetX = clientX;
      mouse.targetY = clientY;

      targetFluidIntensity = Math.min(0.75, targetFluidIntensity + speed * 0.005 + 0.06);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    handleResize();

    // Start with center coordinates
    mouse.x = mouse.targetX = mouse.prevX = canvas.clientWidth * 0.5;
    mouse.y = mouse.targetY = mouse.prevY = canvas.clientHeight * 0.5;

    let startTime = performance.now();

    // Render loop
    const render = () => {
      if (isDestroyed) return;

      const currentTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse spring interpolation (silky fluid inertia)
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x += (mouse.targetX - mouse.x) * 0.055;
      mouse.y += (mouse.targetY - mouse.y) * 0.055;

      // Smooth fluid decay
      fluidIntensity += (targetFluidIntensity - fluidIntensity) * 0.055;
      targetFluidIntensity *= 0.93; // Smooth exponential decay

      gl.uniform2f(uResolution, canvas.clientWidth, canvas.clientHeight);
      gl.uniform2f(uImageResolution, imgWidth, imgHeight);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform2f(uPrevMouse, mouse.prevX, mouse.prevY);
      gl.uniform1f(uTime, currentTime);
      gl.uniform1f(uFluid, fluidIntensity);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (gl) {
        gl.deleteProgram(program);
        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);
        gl.deleteBuffer(positionBuffer);
        gl.deleteTexture(texture);
      }
    };
  }, [imageSrc]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none ${className}`}
    />
  );
}
