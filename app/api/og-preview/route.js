import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl || (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://"))) {
      return NextResponse.json({ ogImage: null, success: false, reason: "Missing or invalid URL" });
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    let response;
    try {
      response = await fetch(targetUrl, {
        signal: controller.signal,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 CyberShieldBot/1.0",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
        },
        redirect: "follow",
      });
    } catch (fetchErr) {
      clearTimeout(timeoutId);
      return NextResponse.json({ ogImage: null, success: false, reason: fetchErr.name || "Network error" });
    }
    clearTimeout(timeoutId);

    if (!response || !response.ok) {
      return NextResponse.json({ ogImage: null, success: false, reason: `HTTP ${response?.status || 0}` });
    }

    const html = await response.text();
    const headChunk = html.slice(0, 200000);

    const patterns = [
      /<meta[^>]+property=["'](?:og:image|og:image:url|og:image:secure_url)["'][^>]+content=["']([^"']+)["']/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+property=["'](?:og:image|og:image:url|og:image:secure_url)["']/i,
      /<meta[^>]+name=["'](?:og:image|twitter:image|twitter:image:src)["'][^>]+content=["']([^"']+)["']/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+name=["'](?:og:image|twitter:image|twitter:image:src)["']/i,
      /<link[^>]+rel=["'](?:image_src|apple-touch-icon)["'][^>]+href=["']([^"']+)["']/i,
    ];

    let foundUrl = null;
    for (const pattern of patterns) {
      const match = headChunk.match(pattern);
      if (match && match[1]) {
        foundUrl = match[1].trim();
        break;
      }
    }

    if (!foundUrl) {
      return NextResponse.json({ ogImage: null, success: false, reason: "No OG image found" });
    }

    foundUrl = foundUrl.replace(/&amp;/g, "&");

    if (foundUrl.startsWith("//")) {
      foundUrl = "https:" + foundUrl;
    } else if (!foundUrl.startsWith("http://") && !foundUrl.startsWith("https://")) {
      try {
        foundUrl = new URL(foundUrl, targetUrl).href;
      } catch {
        return NextResponse.json({ ogImage: null, success: false, reason: "Malformed resolved URL" });
      }
    }

    return NextResponse.json(
      {
        ogImage: foundUrl,
        success: true,
        source: targetUrl,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
        },
      }
    );
  } catch (err) {
    return NextResponse.json({ ogImage: null, success: false, reason: err.message || "Unknown error" });
  }
}
