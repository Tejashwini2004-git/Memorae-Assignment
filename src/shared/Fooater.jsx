import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t bg-white dark:bg-[#021026]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="text-lg font-semibold">Memorae</div>
          <div className="text-sm text-gray-600">Redesigned — Demo project</div>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Contact</a>
        </div>

        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Memorae
        </div>
      </div>
    </footer>
  );
}
