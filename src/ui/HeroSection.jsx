import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-12">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-extrabold"
        >
          Your assistant in WhatsApp — reminders, lists & more.
        </motion.h1>
        <p className="mt-4 text-gray-600">
          Use Memorae inside WhatsApp to create reminders by text or voice. No
          separate app. Simple & fast.
        </p>
        <div className="mt-6 flex gap-4">
          <a className="btn-primary">Start on WhatsApp</a>
          <a className="px-4 py-2 rounded-md border">How it works</a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-6 rounded-3xl shadow-lg"
      >
        {/* Mock chat UI */}
        <div className="space-y-4">
          <div className="chat-in">
            Hi Memorae, remind me to pay bills on 20th
          </div>
          <div className="chat-out self-end">
            Reminder set for 20th — will notify on WhatsApp
          </div>
          <div className="chat-in">Add milk to shopping list</div>
        </div>
      </motion.div>
    </section>
  );
}
