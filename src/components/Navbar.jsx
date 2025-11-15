import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between px-10 py-6 shadow bg-white fixed top-0 w-full z-50"
    >
      <h1 className="text-2xl font-bold text-indigo-600">Memorae</h1>
      <ul className="flex gap-8 text-gray-600 font-medium">
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </motion.nav>
  );
}
