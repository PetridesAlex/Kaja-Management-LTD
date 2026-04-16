"use client";

import { useState } from "react";

const channels = [
  {
    id: "instagram",
    href: "https://www.instagram.com/kaja_management/",
    label: "Instagram",
    bgClass: "bg-accent",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.9 2.3a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      </svg>
    )
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/people/Kaja-Management/61570694188025/?ref=1",
    label: "Facebook",
    bgClass: "bg-secondary",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.5-1.46H17V5c-.36-.05-1.2-.15-2.28-.15-2.26 0-3.82 1.38-3.82 3.91V11H8.5v3h2.4v8h2.6Z" />
      </svg>
    )
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/kajamanagement/",
    label: "LinkedIn",
    bgClass: "bg-brandSoft",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.95 1.95 0 1 0 3.25 4.95a1.95 1.95 0 0 0 3.91 0ZM20.75 13.38c0-3.38-1.8-4.95-4.2-4.95-1.93 0-2.8 1.06-3.28 1.8V8.5H9.9V20h3.37v-6.05c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.82 1.98 3.25V20h3.22v-6.62Z" />
      </svg>
    )
  },
  {
    id: "email",
    href: "mailto:Info@kajamanagement.eu",
    label: "Email",
    bgClass: "bg-slate-800",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.2-.55 7.22 5.45c.35.26.82.26 1.16 0L19.8 6.2a.75.75 0 0 0-.55-.2H4.75c-.2 0-.39.07-.55.2Zm16.3 1.5-6.91 5.22a2.5 2.5 0 0 1-3.18 0L3.5 7.7v9.55c0 .55.45 1 1 1h14.75c.55 0 1-.45 1-1V7.7Z" />
      </svg>
    )
  }
];

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-[60] flex flex-col items-end gap-2">
      {open ? (
        <div className="rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur p-2 shadow-2xl">
          <div className="grid gap-2">
            {channels.map((channel) => (
              <a
                key={channel.id}
                href={channel.href}
                target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={channel.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={channel.label}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-white ${channel.bgClass} hover:opacity-90 transition`}
              >
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-white/20">{channel.icon}</span>
                <span className="text-sm font-medium">{channel.label}</span>
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`rounded-full h-14 w-14 shadow-2xl border border-accent/35 bg-gradient-to-br from-secondary via-brandSoft to-accent text-white flex items-center justify-center transition-transform ${open ? "" : "floating-contact-fab"}`}
        aria-label={open ? "Close quick contact menu" : "Open quick contact menu"}
      >
        {open ? (
          <span className="text-lg leading-none">×</span>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M2.5 6.75A2.75 2.75 0 0 1 5.25 4h13.5a2.75 2.75 0 0 1 2.75 2.75v10.5A2.75 2.75 0 0 1 18.75 20H5.25A2.75 2.75 0 0 1 2.5 17.25V6.75Zm2.22-.55L12 11.76l7.28-5.56a.75.75 0 0 0-.53-.2H5.25c-.2 0-.38.07-.53.2Zm15.28 1.53-7.37 5.62a1.5 1.5 0 0 1-1.82 0L3.44 7.73v9.52c0 .55.45 1 1 1h15.12c.55 0 1-.45 1-1V7.73Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
