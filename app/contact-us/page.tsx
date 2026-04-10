"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormState = {
  name: string;
  email: string;
  role: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-navy py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/60 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Let&apos;s Chat
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Tired of chasing invoices and missing income? Join the Invoy
              waitlist and be first to experience AI-powered billing.
            </p>
          </div>
        </section>

        {/* Form section */}
        <section className="bg-light-blue py-16 px-4">
          <div className="max-w-lg mx-auto">
            {status === "success" ? (
              /* Success state */
              <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
                <div className="w-16 h-16 bg-light-mint rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-navy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-navy text-2xl font-bold mb-3">
                  You&apos;re on the list!
                </h2>
                <p className="text-gray-text text-sm leading-relaxed">
                  Thanks for joining the Invoy waitlist. We&apos;ll be in touch
                  soon at{" "}
                  <span className="font-semibold text-navy">{form.email}</span>.
                </p>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5"
                noValidate
              >
                <div>
                  <h2 className="text-navy text-2xl font-bold mb-1">
                    Get Early Access
                  </h2>
                  <p className="text-gray-text text-sm">
                    Join the waitlist — we&apos;re onboarding users soon.
                  </p>
                </div>

                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-navy text-sm font-medium">
                    Full Name{" "}
                    <span className="text-purple" aria-hidden>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy placeholder:text-gray-300 outline-none focus:border-purple transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-navy text-sm font-medium">
                    Email{" "}
                    <span className="text-purple" aria-hidden>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy placeholder:text-gray-300 outline-none focus:border-purple transition-colors"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="text-navy text-sm font-medium">
                    Role / Title{" "}
                    <span className="text-gray-300 font-normal">(optional)</span>
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    autoComplete="organization-title"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Freelance Designer, Product Consultant…"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy placeholder:text-gray-300 outline-none focus:border-purple transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-navy text-sm font-medium">
                    Message{" "}
                    <span className="text-gray-300 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your invoicing pain points…"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy placeholder:text-gray-300 outline-none focus:border-purple transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-red-500 text-sm">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-purple text-white font-semibold py-3 rounded-full hover:bg-purple/90 transition-colors disabled:opacity-60 text-sm mt-1"
                >
                  {status === "loading" ? "Submitting…" : "Join the Waitlist"}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Contact details */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-8 justify-center text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start gap-2">
              <Image
                src="https://framerusercontent.com/images/LMIi5iwsKCxHvi7UFMXtk4a4Lw.svg"
                alt="Email"
                width={40}
                height={40}
              />
              <span className="text-navy font-semibold text-sm">Email</span>
              <a
                href="mailto:team@dissolveit.ai"
                className="text-purple hover:underline text-sm"
              >
                team@dissolveit.ai
              </a>
            </div>
            <div className="hidden sm:block w-px bg-gray-100" />
            <div className="flex flex-col items-center sm:items-start gap-2">
              <Image
                src="https://framerusercontent.com/images/QUIgSEnCtTg1ZZCm2Oj3MHzQQ.svg"
                alt="Location"
                width={40}
                height={40}
              />
              <span className="text-navy font-semibold text-sm">Location</span>
              <span className="text-gray-text text-sm">Boston, MA</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
