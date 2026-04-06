"use client";

import { useState } from "react";
import Input from "@/components/shared/Input";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SectionTitle from "@/components/shared/SectionTitle";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  const subscribe = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email.");
      setOk("");
      return;
    }
    setError("");
    setOk("Subscribed successfully.");
    setEmail("");
  };

  return (
    <section className="mt-20 bg-white border border-slate-100 rounded-2xl p-6 md:p-8">
      <SectionTitle
        eyebrow="Newsletter"
        title="Get Weekly Market Insights"
        subtitle="New listings, investment trends and neighborhood updates."
      />
      <Input label="Email" value={email} onChange={setEmail} error={error} placeholder="you@example.com" />
      <PrimaryButton onClick={subscribe}>Subscribe</PrimaryButton>
      {ok ? <p className="text-brand text-sm mt-2">{ok}</p> : null}
    </section>
  );
}
