"use client";
import { Text } from "@/components/utility";
import { useState } from "react";
import { ThemeContextInterface, useTheme } from "./theme";

export const ThemeSwitch = () => {
  const [toggle, setToggle] = useState(false);

  const { mode, updateMode } = useTheme() as ThemeContextInterface;

  return (
    <div>
      <div
        className="px-2 py-2 bg-gray-100 dark:bg-gray-600 w-1/3 text-center rounded-md cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        {mode}
      </div>

      <div
        className={`px-2 py-2 mt-2 bg-gray-100 dark:bg-gray-600 w-1/3 rounded-md cursor-pointer transition-all ${
          toggle ? "scale-100" : "scale-0"
        }`}
      >
        <p
          className="py-2"
          onClick={() => {
            updateMode();
            setToggle(!toggle);
          }}
        >
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </p>
     </div>
    </div>
  );
};
