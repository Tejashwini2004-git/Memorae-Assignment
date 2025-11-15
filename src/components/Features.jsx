import { motion } from "framer-motion";
import f1 from "/assets/feature1.png";
import f2 from "/assets/feature2.png";
import f3 from "/assets/feature3.png";

const features = [
  {
    title: "Smart Search",
    img: f1,
    desc: "Find anything instantly with AI-powered indexing.",
  },
  {
    title: "Organized Notes",
    img: f2,
    desc: "Group and structure your knowledge in clean layouts.",
  },
  {
    title: "Knowledge Graph",
    img: f3,
    desc: "See how your information connects visually.",
  },
];

export default function Features() {
  return (
    <section className="px-16 py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>

      <div className="grid grid-cols-3 gap-10">
        {features.map((f, i) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            key={i}
            className="p-6 rounded-2xl border shadow hover:shadow-lg transition bg-gray-50"
          >
            <img src={f.img} className="w-24 mx-auto" />
            <h3 className="text-2xl font-semibold text-center mt-4">
              {f.title}
            </h3>
            <p className="text-gray-600 text-center mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
