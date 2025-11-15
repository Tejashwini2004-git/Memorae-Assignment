import React from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      benefits: ["Reminders", "Lists", "Limited Sync"],
    },
    {
      name: "Pro",
      price: "$6/mo",
      benefits: ["Unlimited Reminders", "Calendar Sync", "Priority Support"],
    },
    {
      name: "Teams",
      price: "$20/mo",
      benefits: ["Shared Lists", "Team Admin", "Billing"],
    },
  ];

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-6">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="card text-center p-8"
          >
            <div className="text-xl font-semibold mb-3">{p.name}</div>
            <div className="text-3xl font-bold mb-4">{p.price}</div>
            <ul className="text-sm text-gray-600 mb-6 space-y-2">
              {p.benefits.map((b, idx) => (
                <li key={idx}>• {b}</li>
              ))}
            </ul>
            <button className="px-6 py-2 rounded-lg bg-purple-600 text-white">
              Choose
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
