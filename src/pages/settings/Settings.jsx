import { useState } from "react";

export default function Settings() {
  const [dark, setDark] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
          <p className="font-medium">Dark Mode</p>
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
            className="scale-125"
          />
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="font-medium mb-2">Notification Sounds</p>
          <select className="border p-2 rounded-lg w-full">
            <option>Default</option>
            <option>Soft Bell</option>
            <option>Chimes</option>
          </select>
        </div>
      </div>
    </div>
  );
}
