"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted)
    return <div className="w-10 h-5 rounded-full bg-primary animate-pulse" />;

  return (
    <div className="flex gap-2 items-center mt-4">
      {["light", "dark", "system"].map((m) => (
        <ToggleButton key={m} mode={m as "light" | "dark" | "system"} />
      ))}
    </div>
  );
}

const ToggleButton = ({ mode }: { mode: "light" | "dark" | "system" }) => {
  const { setTheme, theme } = useTheme();
  const isActive = theme === mode;
  return (
    <button
      className={`px-4 py-2 rounded-full border-2 border-border cursor-pointer hover:border-primary hover:-translate-y-1 transition-all duration-300 ease-in-out ${isActive && "bg-primary text-white font-bold"}`}
      onClick={() => setTheme(mode)}
    >
      {mode.toUpperCase()}
    </button>
  );
};
