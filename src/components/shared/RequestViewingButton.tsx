"use client";

import { FormEvent, useEffect, useState } from "react";

type RequestViewingButtonProps = {
  propertyTitle: string;
};

type FormState = {
  date: string;
  name: string;
  email: string;
  phone: string;
};

const initialState: FormState = {
  date: "",
  name: "",
  email: "",
  phone: ""
};

export default function RequestViewingButton({ propertyTitle }: RequestViewingButtonProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>(initialState);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.date || !form.name || !form.email || !form.phone) {
      setError("Please complete all fields before submitting.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const phoneOk = /^[+0-9()\-\s]{7,}$/.test(form.phone);

    if (!emailOk) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!phoneOk) {
      setError("Please enter a valid contact number.");
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  };

  const closeModal = () => {
    setOpen(false);
    setSubmitted(false);
    setError("");
    setForm(initialState);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-xl px-5 py-3 min-h-12 font-semibold bg-brand text-white hover:opacity-90 transition"
      >
        Request viewing
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[10000] bg-slate-950/70 p-4 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Request viewing form for ${propertyTitle}`}
          onClick={closeModal}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.16em] text-muted font-semibold">PROPERTY VIEWING</p>
                <h3 className="text-2xl text-slate-900 font-semibold mt-1">Request a Viewing</h3>
                <p className="text-slate-600 mt-2 text-sm">{propertyTitle}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm text-slate-700"
              >
                Close
              </button>
            </div>

            {submitted ? (
              <div className="mt-5 rounded-xl bg-accent/15 border border-accent/40 p-4">
                <p className="text-brand font-semibold">Viewing request sent successfully.</p>
                <p className="text-brand/80 text-sm mt-1">Our team will contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm text-slate-700 font-medium">Date of viewing</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(event) => setForm((prev) => ({ ...prev, date: event.target.value }))}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700 font-medium">Full name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    placeholder="Your name"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700 font-medium">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700 font-medium">Contact number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                    placeholder="+357 99961512"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>

                {error ? <p className="text-sm text-rose-600">{error}</p> : null}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-brand to-secondary px-4 py-2.5 text-white font-semibold hover:opacity-90 transition"
                >
                  Submit request
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
