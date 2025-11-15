import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How do reminders work?",
    a: "Send a quick message and we convert it into a scheduled reminder.",
  },
  {
    q: "Can I sync with my calendar?",
    a: "Yes — Pro plan supports Google Calendar sync.",
  },
  {
    q: "Is my data private?",
    a: "All demo data is local. Production requires proper backend and auth.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-6">Frequently asked questions</h3>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-4 bg-white rounded-lg shadow"
          >
            <summary className="font-semibold cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
