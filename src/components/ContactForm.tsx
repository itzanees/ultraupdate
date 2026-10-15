"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string; // honeypot
}

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "General Enquiry",
  message: "",
  website: "",
};

const subjectOptions = [
  "General Enquiry",
  "Cold Storage Facility",
  "Structural and Civil Works",
  "Sandwich Panel Installation",
  "Warehouse Cooling System",
  "Industrial Doors and Shutters",
  "Coldroom and Warehouse Lighting",
  "Loading Bay Facilities",
  "Fire Fighting System",
  "Rack System and Equipment",
  "Request a Quote",
];

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const update =
    (key: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        setStatus("success");
        setFeedback(json.message ?? "Thank you! We will be in touch soon.");
        setData(initialState);
      } else {
        setStatus("error");
        setFeedback(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#050816]/60 border border-border text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/60 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from humans, bots fill it */}
      <div
        className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={update("website")}
          />
        </label>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Ahmed Al-Rashid"
            value={data.name}
            onChange={update("name")}
            className={inputClass}
            autoComplete="name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Email <span className="text-cyan-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={150}
            placeholder="ahmed@company.com"
            value={data.email}
            onChange={update("email")}
            className={inputClass}
            autoComplete="email"
          />
        </div>
      </div>

      {/* Phone + Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+966 50 000 0000"
            value={data.phone}
            onChange={update("phone")}
            className={inputClass}
            autoComplete="tel"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={data.subject}
            onChange={update("subject")}
            className={`${inputClass} appearance-none cursor-pointer bg-[#050816]/60`}
          >
            {subjectOptions.map((option) => (
              <option key={option} value={option} className="bg-[#0B1120]">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Message <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={3000}
          placeholder="Tell us about your project — facility type, location, timeline, and any specific requirements..."
          value={data.message}
          onChange={update("message")}
          className={`${inputClass} resize-y`}
        />
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs text-muted-foreground/60">
            The more detail, the faster we can respond with a tailored proposal.
          </p>
          <p
            className={`text-xs ${
              data.message.length > 2800
                ? "text-amber-400"
                : "text-muted-foreground/60"
            }`}
          >
            {data.message.length}/3000
          </p>
        </div>
      </div>

      {/* Feedback banner */}
      <AnimatePresence>
        {status !== "idle" && status !== "submitting" && feedback && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`flex items-start gap-3 p-4 rounded-xl border ${
              status === "success"
                ? "bg-emerald-500/10 border-emerald-400/30 text-emerald-300"
                : "bg-red-500/10 border-red-400/30 text-red-300"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            )}
            <p className="text-sm font-medium">{feedback}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground/70 leading-relaxed">
        By submitting, you agree to be contacted by our team about your project.
        We never share or sell your information.
      </p>
    </form>
  );
}