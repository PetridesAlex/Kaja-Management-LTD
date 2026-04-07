"use client";

import { type FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { CheckCircle2, Mail, PhoneCall } from "lucide-react";
import ScrollReveal from "@/components/animated/ScrollReveal";
import Input from "@/components/shared/Input";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SectionTitle from "@/components/shared/SectionTitle";
import Select from "@/components/shared/Select";

type FormErrors = {
  full_name?: string;
  business_email?: string;
  direct_phone?: string;
  property_type?: string;
  notes?: string;
};

const INITIAL_FORM = {
  full_name: "",
  business_email: "",
  direct_phone: "",
  property_type: "Apartment Building",
  notes: "",
};

export default function ContactCTASection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (field: keyof typeof INITIAL_FORM, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setOk("");
    setSubmitError("");

    const nextErrors: FormErrors = {};
    if (!form.full_name.trim()) nextErrors.full_name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.business_email)) nextErrors.business_email = "Enter a valid email.";
    if (!/^\+?[0-9\s]{7,}$/.test(form.direct_phone)) nextErrors.direct_phone = "Enter a valid phone number.";
    if (!form.property_type) nextErrors.property_type = "Select property type.";
    if (form.notes.trim().length < 10) nextErrors.notes = "Message must be at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const autoreplyId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !autoreplyId || !publicKey) {
      setSubmitError("Email service is not configured. Please try again later.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(serviceId, templateId, form, publicKey);
      await emailjs.send(serviceId, autoreplyId, form, publicKey);
      setOk("Consultation request sent successfully. Our management team will contact you shortly.");
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "text" in err
            ? String((err as { text: unknown }).text)
            : "Unknown error";
      setSubmitError(`Something went wrong (${message}). Please try again or contact us directly.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollReveal>
      <section className="mt-20 mb-10">
        <SectionTitle
          eyebrow="Management Consultation"
          title="Build a Better Property Management Plan"
          subtitle="Share your portfolio and service goals. We will prepare a tailored management proposal for your property operations."
        />
        <div className="grid grid-cols-1 gap-8">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brandDeep via-brand to-secondary p-5 md:p-7 shadow-2xl">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(176,138,87,0.22),transparent_35%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(31,90,74,0.2),transparent_40%)]"
            aria-hidden
          />

          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-5 md:p-6 mb-5 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-brandSoft" />
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <p className="text-xs tracking-[0.18em] text-white/70 font-semibold">CONTACT INFORMATION</p>
                <h3 className="text-white text-xl font-semibold mt-1">Property Management Desk</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/kaja_management/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-accent text-white p-2 shadow-sm"
                  aria-label="Instagram"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.9 2.3a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary text-white p-2 shadow-sm"
                  aria-label="Facebook"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.5-1.46H17V5c-.36-.05-1.2-.15-2.28-.15-2.26 0-3.82 1.38-3.82 3.91V11H8.5v3h2.4v8h2.6Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/kajamanagement/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-brandSoft text-white p-2 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.95 1.95 0 1 0 3.25 4.95a1.95 1.95 0 0 0 3.91 0ZM20.75 13.38c0-3.38-1.8-4.95-4.2-4.95-1.93 0-2.8 1.06-3.28 1.8V8.5H9.9V20h3.37v-6.05c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.82 1.98 3.25V20h3.22v-6.62Z" />
                  </svg>
                </a>
                <a
                  href="mailto:Info@kajamanagement.eu"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-800 text-white p-2 shadow-sm"
                  aria-label="Email"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.2-.55 7.22 5.45c.35.26.82.26 1.16 0L19.8 6.2a.75.75 0 0 0-.55-.2H4.75c-.2 0-.39.07-.55.2Zm16.3 1.5-6.91 5.22a2.5 2.5 0 0 1-3.18 0L3.5 7.7v9.55c0 .55.45 1 1 1h14.75c.55 0 1-.45 1-1V7.7Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <motion.a
                href="tel:+35799961512"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: 0.02 }}
                className="group rounded-2xl bg-white/8 border border-white/20 p-4 backdrop-blur-sm hover:bg-white/12 transition"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent to-secondary text-white flex items-center justify-center shadow-sm">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <p className="text-[11px] tracking-[0.16em] text-white/75 font-semibold mt-3">CALL US</p>
                <p className="text-white font-semibold mt-1 group-hover:text-accentSoft transition">+357 99961512</p>
              </motion.a>

              <motion.a
                href="mailto:Info@kajamanagement.eu"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group rounded-2xl bg-white/8 border border-white/20 p-4 backdrop-blur-sm hover:bg-white/12 transition"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brandSoft to-brand text-white flex items-center justify-center shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-[11px] tracking-[0.16em] text-white/75 font-semibold mt-3">EMAIL US</p>
                <p className="text-white font-semibold mt-1 break-all group-hover:text-accentSoft transition">
                  Info@kajamanagement.eu
                </p>
              </motion.a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 rounded-2xl bg-white/95 p-5 md:p-6">
            <div className="mb-4">
              <p className="text-[11px] tracking-[0.16em] text-muted font-semibold">CONSULTATION FORM</p>
              <h4 className="text-slate-900 text-2xl font-semibold mt-1">Request Your Management Proposal</h4>
              <p className="text-slate-600 text-sm mt-2">
                Complete the form below and our team will contact you with a tailored service plan.
              </p>
            </div>

            <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-white via-page/50 to-pageSoft/45 p-4 md:p-5">
              <div className="grid md:grid-cols-2 gap-x-4 gap-y-1">
                <Input label="Full Name" value={form.full_name} onChange={(v) => handleChange("full_name", v)} error={errors.full_name} placeholder="Your full name" />
                <Input label="Business Email" value={form.business_email} onChange={(v) => handleChange("business_email", v)} error={errors.business_email} placeholder="info@company.com" />
                <Input label="Direct Phone" value={form.direct_phone} onChange={(v) => handleChange("direct_phone", v)} error={errors.direct_phone} placeholder="+357 99961512" />
                <Select
                  label="Property Type"
                  value={form.property_type}
                  onChange={(v) => handleChange("property_type", v)}
                  options={[
                    { label: "Apartment Building", value: "Apartment Building" },
                    { label: "Mixed-Use Building", value: "Mixed-Use Building" },
                    { label: "Villa", value: "Villa" },
                    { label: "Office", value: "Office" },
                    { label: "Retail Unit", value: "Retail Unit" }
                  ]}
                />
              </div>

              <div className="mt-2">
                <Input
                  label="Notes"
                  value={form.notes}
                  onChange={(v) => handleChange("notes", v)}
                  multiline
                  error={errors.notes}
                  placeholder="Tell us briefly what support you need."
                />
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-brand/5 border border-accent/20 px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
              <p className="text-xs text-slate-600">Response time: usually within 24 hours.</p>
              <PrimaryButton
                type="submit"
                disabled={loading}
                className="w-auto min-h-[44px] px-5 py-2.5 text-sm rounded-lg shadow-sm bg-gradient-to-r from-brand to-secondary hover:opacity-95 disabled:opacity-60"
              >
                {loading ? "Sending…" : "Request Management Consultation"}
              </PrimaryButton>
            </div>
            {ok && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 rounded-xl border border-brand/20 bg-gradient-to-r from-brand/5 via-secondary/5 to-brand/5 px-5 py-4 flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                <div>
                  <p className="text-brand font-semibold text-sm">Message Sent Successfully</p>
                  <p className="text-slate-600 text-xs mt-1">Our management team will contact you shortly. Typical response time is within 24 hours.</p>
                </div>
              </motion.div>
            )}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 rounded-xl border border-red-200 bg-red-50 px-5 py-4 flex items-start gap-3"
              >
                <svg className="h-5 w-5 text-red-500 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-red-700 font-semibold text-sm">Unable to Send</p>
                  <p className="text-red-600/80 text-xs mt-1">{submitError}</p>
                </div>
              </motion.div>
            )}
          </form>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
