import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 bg-canvas-base">
      <div className="container-narrow text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-surface-light border border-border-card flex items-center justify-center text-forest shadow-subtle">
          <ShieldAlert className="w-8 h-8 text-forest" />
        </div>
        <div className="space-y-2">
          <span className="mono-badge bg-surface-warm text-forest border-border-subtle text-xs">
            404 · SYSTEM UNREACHABLE
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-forest">
            Node Not Found
          </h1>
          <p className="text-sm text-text-body max-w-md mx-auto leading-relaxed">
            The requested architecture route does not exist or has been deprecated in the current ecosystem release.
          </p>
        </div>
        <div className="pt-2">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio Overview</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
