import { motion } from "framer-motion";
import hero from "/assets/hero.png";

export default function Hero() {
  return (
    <section className="flex items-center justify-between px-16 pt-40 pb-20">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-xl"
      >
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Organize your
          <br /> AI Knowledge Seamlessly
        </h1>
        <p className="mt-5 text-gray-600 text-lg">
          A powerful workspace to store, search, and manage everything you
          learn.
        </p>
        <button className="mt-8 px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg shadow hover:bg-indigo-700 transition">
          Get Started
        </button>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        src={hero}
        className="w-[480px]"
      />
    </section>
  );
}
