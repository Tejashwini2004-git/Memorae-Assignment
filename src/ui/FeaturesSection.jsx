import React from "react";

const features = [
  { title: "WhatsApp-first", desc: "Work without a new app." },
  { title: "Recurring Reminders", desc: "Never miss recurring tasks." },
  { title: "Calendar Sync", desc: "Sync with Google Calendar." },
];

export default function FeaturesSection() {
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold">Features</h3>
      <div className="mt-4 grid grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="card">
            <h4 className="font-semibold">{f.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
