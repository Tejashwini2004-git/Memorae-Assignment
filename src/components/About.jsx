import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-16 py-24">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-10"
      >
        About the Product
      </motion.h2>

      <div className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed">
        Memorae helps you store everything you learn from AI chats, articles,
        videos, and documents — all in one place. It transforms scattered
        knowledge into a searchable, structured, and visual system.
      </div>
    </section>
  );
}
