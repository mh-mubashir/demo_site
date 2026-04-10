import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Hero ──────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-light-purple/40 to-white pt-16 pb-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Centered copy */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-light-purple text-navy text-xs font-semibold px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 bg-purple rounded-full inline-block" />
            Now in private beta
          </div>

          <h1 className="text-navy text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            The{" "}
            <span className="bg-light-purple text-purple px-2 py-0.5 rounded-lg">AI</span>
            {" "}that turns all your<br className="hidden sm:block" /> hard&#8209;work into{" "}
            <span className="text-purple">guaranteed revenue</span>
          </h1>

          <p className="text-gray-text text-lg leading-relaxed mb-9">
            Organize your finance better. Invoy automates your invoices,
            tracks every billable minute, and ensures you never miss a payment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact-us"
              className="bg-purple text-white font-semibold px-8 py-3.5 rounded-full hover:bg-purple/90 transition-colors text-sm"
            >
              Try For Free
            </Link>
            <Link
              href="/about-us"
              className="border-2 border-navy/15 text-navy font-semibold px-8 py-3.5 rounded-full hover:border-navy/30 transition-colors text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Real product screenshot */}
        <div className="max-w-4xl mx-auto">
          <Image
            src="https://framerusercontent.com/images/2SN8lGSK7RBIaJxt9zSknFsI3A.png"
            alt="Invoy dashboard"
            width={1264}
            height={790}
            className="w-full rounded-2xl shadow-2xl shadow-purple/10 border border-purple/10"
            priority
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Partners ───────────────────────────────────────────────────── */
function PartnersSection() {
  return (
    <section className="bg-white py-14 px-4 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-gray-text/50 text-xs font-semibold uppercase tracking-widest mb-8">
          As showcased at
        </p>
        <Image
          src="https://framerusercontent.com/images/OmkjNSm6aEdwlXovJ7nPC4qOUg.png"
          alt="Featured in"
          width={3510}
          height={1170}
          className="w-full h-auto max-h-16 object-contain"
        />
      </div>
    </section>
  );
}

/* ─── Revenue ────────────────────────────────────────────────────── */
function RevenueSection() {
  const features = [
    "Automatic time tracking from your calendar",
    "Hourly rate calculation and invoice generation",
    "Smart follow-up reminders sent automatically",
    "Missed billable time detection and recovery",
  ];
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-light-mint text-navy text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            Revenue Intelligence
          </span>
          <h2 className="text-navy text-3xl sm:text-4xl font-bold leading-tight mb-5">
            Maximize your billable revenue
          </h2>
          <p className="text-gray-text text-base leading-relaxed mb-7">
            Stop leaving money on the table. Invoy scans your calendar, emails,
            and project tools to find every billable moment — then turns them
            into polished invoices instantly.
          </p>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-mint flex-shrink-0 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-navy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-text text-sm leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact-us"
            className="inline-block text-purple font-semibold text-sm hover:underline"
          >
            Learn More →
          </Link>
        </div>

        {/* Real feature screenshot */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
          <Image
            src="https://framerusercontent.com/images/rhmnKBQGALhc1GYMEIkuEUhdf5w.png"
            alt="Invoy revenue maximization feature"
            width={1418}
            height={750}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ────────────────────────────────────────────────── */
function HowItWorksSection() {
  const cards = [
    {
      icon: "https://framerusercontent.com/images/3MsvJMDHSMY5shGKaPM4DgaP8.svg",
      title: "Instant, Accurate Invoice Generation",
      description:
        "Pull data from your calendar, notes, and communications to generate precise invoices in under 30 seconds.",
      bg: "bg-light-purple",
      text: "text-navy",
      iconBg: "bg-white/60",
    },
    {
      icon: "https://framerusercontent.com/images/BT5YoglGUZrZjGEVzHign43hGfY.svg",
      title: "On-Demand Invoice Explanation",
      description:
        "Let clients ask about line items. Invoy provides clear, professional explanations backed by your actual work log.",
      bg: "bg-light-mint",
      text: "text-navy",
      iconBg: "bg-white/60",
    },
    {
      icon: "https://framerusercontent.com/images/HeXQY8gOmjOijE81flY0kaM4rI.svg",
      title: "AI-Powered Productivity Tagging",
      description:
        "Automatically categorize tasks and time entries. Know exactly how you spend your hours and maximize billable time.",
      bg: "bg-light-purple",
      text: "text-navy",
      iconBg: "bg-white/60",
    },
    {
      icon: "https://framerusercontent.com/images/If5u5katnLS4CbcnDuEAz6hXg.svg",
      title: "Smart-Edit & Consistent Templates",
      description:
        "Your brand, your style. Invoy remembers your invoice templates and ensures every document looks impeccably professional.",
      bg: "bg-light-mint",
      text: "text-navy",
      iconBg: "bg-white/60",
    },
    {
      icon: "https://framerusercontent.com/images/QuYFLwwXC0hw2c92US2nZpVhJ2s.svg",
      title: "Non-Stop Inbox Monitoring",
      description:
        "Invoy watches your inbox 24/7 for payment confirmations, disputes, and client messages — and responds intelligently.",
      bg: "bg-light-purple",
      text: "text-navy",
      iconBg: "bg-white/60",
    },
  ];

  return (
    <section className="bg-navy py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-white/60 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            How It Works
          </span>
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
            The Engine of Autonomy
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
            Five intelligent systems working in concert so you can focus on doing
            great work — not chasing payments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div key={i} className={`${card.bg} rounded-2xl p-6`}>
              <div className={`w-10 h-10 ${card.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <Image src={card.icon} alt={card.title} width={32} height={32} />
              </div>
              <h3 className={`font-bold text-base mb-2 ${card.text}`}>{card.title}</h3>
              <p className={`text-sm leading-relaxed ${card.text} opacity-60`}>{card.description}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-purple rounded-2xl p-6 flex flex-col justify-between">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Image
                src="https://framerusercontent.com/images/yZM4boTl5iL3iECA5oFjkxVL3A.svg"
                alt="Get started"
                width={32}
                height={32}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Ready to automate?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Join hundreds of freelancers already on the waitlist.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-block bg-mint text-navy font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-mint/90 transition-colors text-center"
            >
              Get early access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Tools ───────────────────────────────────────────────────────── */
function ToolsSection() {
  return (
    <section className="bg-light-blue py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-white border border-gray-200 text-navy text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
          Integrations
        </span>
        <h2 className="text-navy text-3xl sm:text-4xl font-bold mb-4">
          Integrate With Tools You Know And Love
        </h2>
        <p className="text-gray-text max-w-xl mx-auto mb-10 text-base leading-relaxed">
          Invoy connects with your existing workflow — no manual data entry,
          no disruption to how you already work.
        </p>

        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg mb-10">
          <Image
            src="https://framerusercontent.com/images/IZcjvuAsCJuyb3IqYb8xVxvycA.png"
            alt="Integrations with tools you know and love"
            width={1400}
            height={1040}
            className="w-full h-auto"
          />
        </div>

        <Link
          href="/contact-us"
          className="inline-block bg-navy text-white font-semibold px-8 py-3.5 rounded-full hover:bg-navy/90 transition-colors text-sm"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Invoy completely changed how I run my freelance business. I used to spend Sunday evenings writing invoices — now it takes 30 seconds. I've recovered thousands in billable hours I was missing.",
      name: "Adam Wharton",
      title: "Freelance Strategist",
      avatar: "https://framerusercontent.com/images/9QTtNiXph1VqSWTush3MIKOHbMA.png",
    },
    {
      quote:
        "As a product consultant working across five clients, keeping track of what I billed was a nightmare. Invoy's AI just figures it out. The payment accuracy is insane — I haven't had a dispute in months.",
      name: "Maria Chen",
      title: "Product Consultant",
      avatar: "https://framerusercontent.com/images/AwrLZocaDUdkN8hOcqVU9IAh0.png",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Big stat */}
        <div className="text-center mb-14">
          <div className="inline-flex items-end gap-1 mb-4">
            <span className="text-8xl font-black text-navy leading-none">99</span>
            <span className="text-5xl font-black text-purple mb-2">%</span>
          </div>
          <p className="text-gray-text text-lg max-w-sm mx-auto leading-relaxed">
            Payment accuracy rate across all invoices processed through Invoy.
            Money in your pocket, guaranteed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-light-blue rounded-2xl p-7 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-purple"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-text text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover w-9 h-9 flex-shrink-0"
                />
                <div>
                  <p className="text-navy font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-text text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="bg-navy py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-5">
          Are you excited to try?{" "}
          <span className="text-mint">Join the waiting list</span>
        </h2>
        <p className="text-white/60 text-lg mb-9 leading-relaxed">
          Be among the first freelancers to experience AI-powered invoice
          automation. No credit card required.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-mint text-navy font-bold px-10 py-4 rounded-full text-base hover:bg-mint/90 transition-colors"
        >
          Get early access
        </Link>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <RevenueSection />
        <HowItWorksSection />
        <ToolsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
