"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Mail, Send } from "lucide-react";

export default function ContactForm({ preselectedTopic = "Partnerships" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    topic: preselectedTopic,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({
      name: "",
      email: "",
      company: "",
      topic: "Partnerships",
      message: "",
    });
  };

  return (
    <div className="card-linen p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-sage-light/30 border border-sage-stroke flex items-center justify-center text-forest">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-forest">
            Message Dispatched
          </h3>
          <p className="text-sm text-text-body max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-forest">{formState.name}</span>. Your inquiry has been routed to our leadership team. We will review your message and reply to{" "}
            <span className="font-semibold text-forest">{formState.email}</span> within two working days.
          </p>
          <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle max-w-sm mx-auto text-xs text-text-muted flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-forest" />
            <span>Guaranteed Response Window: &lt; 48 Hours</span>
          </div>
          <div className="pt-4">
            <button onClick={handleReset} className="btn-secondary">
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-display font-semibold text-2xl text-forest">
              Direct Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-text-body">
              Every message is read directly by senior leadership. No automated triage bots.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="e.g. Alex Wright"
                className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-sm text-forest placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-sage-light focus:border-forest"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="alex@enterprise.com"
                className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-sm text-forest placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-sage-light focus:border-forest"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                Organization / Venture *
              </label>
              <input
                type="text"
                required
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                placeholder="e.g. Continental Logistics"
                className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-sm text-forest placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-sage-light focus:border-forest"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                Inquiry Topic
              </label>
              <select
                value={formState.topic}
                onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-sm text-forest focus:outline-none focus:ring-2 focus:ring-sage-light focus:border-forest"
              >
                <option value="Partnerships">Partnerships & Client Work</option>
                <option value="Enterprise Architecture">Enterprise Systems Modernization</option>
                <option value="AI Platforms">Applied AI Deployment</option>
                <option value="Venture Ecosystem">Ecosystem Venture Inquiries</option>
                <option value="Careers">Careers & Studio Roles</option>
                <option value="Press">Press & Media Inquiries</option>
                <option value="Investors">Investor Relations</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
              Message & Scope Overview *
            </label>
            <textarea
              required
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Tell us about your organization, technical parameters, or systems requirements..."
              className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-sm text-forest placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-sage-light focus:border-forest"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <ShieldCheck className="w-4 h-4 text-forest" />
              <span>Strict NDA & Data Confidentiality Assured</span>
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
