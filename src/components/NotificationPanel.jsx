import { motion } from "framer-motion";

export default function NotificationsPanel({ open, setOpen }) {
  return (
    <motion.div
      className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl p-6 z-50"
      initial={{ x: 300 }}
      animate={{ x: open ? 0 : 300 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>

      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          Task “UI Design” due soon
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          New activity on Dashboard
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          Reminder for tomorrow ✓
        </div>
      </div>

      <button
        className="mt-8 w-full py-2 bg-purple-600 text-white rounded-xl"
        onClick={() => setOpen(false)}
      >
        Close
      </button>
    </motion.div>
  );
}
