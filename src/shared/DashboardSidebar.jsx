import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiBell, FiList, FiCalendar, FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";

export default function DashboardSidebar() {
  const items = [
    { to: "/app", label: "Overview", icon: <FiHome /> },
    { to: "/app/reminders", label: "Reminders", icon: <FiBell /> },
    { to: "/app/lists", label: "Lists", icon: <FiList /> },
    { to: "/app/calendar", label: "Calendar", icon: <FiCalendar /> },
    { to: "/app/settings", label: "Settings", icon: <FiSettings /> },
  ];

  const [notifyOpen, setNotifyOpen] = useState(false);

  return (
    <aside className="w-72 bg-white/90 dark:bg-[#071025] border-r dark:border-transparent p-6 min-h-screen">
      <div className="mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-white flex items-center justify-center font-bold">
          M
        </div>
        <div>
          <div className="font-semibold">Memorae</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Workspace
          </div>
        </div>
      </div>
      <NotificationsPanel open={notifyOpen} setOpen={setNotifyOpen} />

      <button onClick={() => setNotifyOpen(true)}>🔔</button>

      <nav className="space-y-2">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-purple-50 dark:bg-white/6 font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            <motion.span whileHover={{ scale: 1.08 }} className="text-lg">
              {it.icon}
            </motion.span>
            <span>{it.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-8">
        <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white">
          New Reminder
        </button>
      </div>
    </aside>
  );
}
