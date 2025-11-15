import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Floating icons data
const floatingIcons = ["⭐", "✔", "📅", "📁", "🔔"];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Scroll progress bar logic
  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrollY(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 🔥 Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-purple-600 z-50"
        style={{ width: `${scrollY}%` }}
      ></div>

      {/* 🔥 Floating Glass Navbar */}
      <FloatingNavbar />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="text-4xl absolute"
            initial={{ x: Math.random() * 500, y: Math.random() * 300 }}
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center relative">
        {/* Text */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Your Modern
            <span className="block text-purple-600">
              Productivity Companion
            </span>
          </h1>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            A clean, fresh redesign — organized tasks, smart workflows, and
            smooth productivity tools in one place.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-xl text-lg font-medium shadow-lg hover:bg-purple-700">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-400 rounded-xl text-lg">
              Explore Features
            </button>
          </div>
        </div>

        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-3xl shadow-xl border"
        >
          <p className="bg-gray-100 rounded-xl px-4 py-3 text-gray-800 mb-3">
            “Organize your day with style and simplicity.”
          </p>
          <p className="bg-purple-600 text-white rounded-xl px-4 py-3 mb-3">
            Task Added Successfully!
          </p>
          <p className="bg-gray-100 rounded-xl px-4 py-3 text-gray-800">
            “Track progress visually and stay consistent.”
          </p>
        </motion.div>
      </section>

      {/* 🔥 Gradient Divider */}
      <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 mb-20"></div>

      {/* FEATURES with 3D Tilt */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10">Core Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <TiltCard
            title="Fast & Simple"
            desc="Clean workflow for easy task creation."
          />
          <TiltCard
            title="Cross-Platform"
            desc="Use it seamlessly across devices."
          />
          <TiltCard
            title="Beautiful Dashboard"
            desc="Visual tracking with analytics."
          />
        </div>
      </section>

      {/* 🔥 Animated Timeline */}
      <TimelineSection />

      {/* 🔥 Testimonial Auto Carousel */}
      <Testimonials />

      {/* Floating CTA Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-6 right-6 px-6 py-3 bg-purple-700 text-white rounded-full shadow-xl text-lg hover:bg-purple-800"
      >
        Start Now
      </motion.button>
    </div>
  );
}

/* ---------------------------- COMPONENTS ---------------------------- */

function FloatingNavbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/60 backdrop-blur-xl px-8 py-3 rounded-2xl shadow-md z-40 border">
      <h1 className="font-bold text-lg">Memorae Redesign</h1>
    </div>
  );
}

function TiltCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}

function TimelineSection() {
  const steps = [
    "Create your task",
    "Organize your workflow",
    "Stay on track",
    "Achieve your goals",
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 mb-24">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>

      <div className="border-l-4 border-purple-600 pl-6 space-y-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-bold">{step}</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Praveen", text: "Super clean UI, very smooth experience!" },
    { name: "Sarah", text: "Makes task management enjoyable." },
    { name: "Amit", text: "Best productivity layout I've seen!" },
  ];

  return (
    <section className="bg-white shadow-inner py-16">
      <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>

      <motion.div
        animate={{ x: ["0%", "-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 14 }}
        className="flex gap-6 w-[200%] justify-center"
      >
        {reviews.concat(reviews).map((r, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-2xl shadow-md w-80">
            <p className="text-gray-700 mb-3">“{r.text}”</p>
            <h4 className="font-semibold text-gray-900">- {r.name}</h4>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
