import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  const pieData = [
    { name: "Completed", value: 65 },
    { name: "Pending", value: 35 },
  ];

  const COLORS = ["#8b5cf6", "#e5e7eb"];

  const lineData = [
    { day: "Mon", tasks: 3 },
    { day: "Tue", tasks: 5 },
    { day: "Wed", tasks: 4 },
    { day: "Thu", tasks: 6 },
    { day: "Fri", tasks: 5 },
    { day: "Sat", tasks: 3 },
    { day: "Sun", tasks: 4 },
  ];

  return (
    <div className="p-8 space-y-10">
      {/* Header */}
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-500 dark:text-gray-300">Today’s Tasks</p>
          <h2 className="text-3xl font-bold mt-2">12</h2>
        </motion.div>

        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-500 dark:text-gray-300">Completed</p>
          <h2 className="text-3xl font-bold mt-2">8</h2>
        </motion.div>

        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-500 dark:text-gray-300">New Messages</p>
          <h2 className="text-3xl font-bold mt-2">4</h2>
        </motion.div>
      </div>

      {/* CHARTS */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Line Chart */}
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-bold mb-4">Weekly Productivity</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="tasks"
                stroke="#8b5cf6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-bold mb-4">Task Completion</h3>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {pieData.map((item, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>

        <ul className="space-y-3">
          <li className="border-l-4 border-purple-500 pl-4">
            Completed “Create UI components”
          </li>
          <li className="border-l-4 border-purple-500 pl-4">
            Updated task “Redesign dashboard”
          </li>
          <li className="border-l-4 border-purple-500 pl-4">
            Added new task “Write documentation”
          </li>
        </ul>
      </div>
    </div>
  );
}
