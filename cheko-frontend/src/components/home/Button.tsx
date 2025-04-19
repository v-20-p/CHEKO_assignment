"use client";

import { useColorMode } from "@/app/config/MuiThemeProvider";

import { useEffect, useState } from "react";


export default function ThemeToggle() {
  const { toggleColorMode, mode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  // Ensure the theme is mounted before rendering to avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = mode === "dark";

  return (
    <div className="flex flex-col align-middle items-center gap-2">

    <svg width="18" height="18" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
<path d="M2.8775 2.1475L1.9825 1.25L1.275 1.9575L2.1725 2.855L2.8775 2.1475ZM1.5 4.975H0V5.975H1.5V4.975ZM6 0H5V1.475H6V0ZM9.725 1.9575L9.0175 1.25L8.12 2.1475L8.8275 2.855L9.725 1.9575ZM8.1225 8.8025L9.02 9.7L9.7275 8.9925L8.83 8.095L8.1225 8.8025ZM9.5 4.975V5.975H11V4.975H9.5ZM5.5 2.475C3.8425 2.475 2.5 3.8175 2.5 5.475C2.5 7.1325 3.8425 8.475 5.5 8.475C7.1575 8.475 8.5 7.1325 8.5 5.475C8.5 3.8175 7.1575 2.475 5.5 2.475ZM5 10.95H6V9.475H5V10.95ZM1.275 8.9925L1.9825 9.7L2.88 8.8025L2.1725 8.095L1.275 8.9925Z" 
fill={`${isDark?"#3F4142":"#111216"}`} />
</svg>

    <button
      onClick={toggleColorMode}
      className={`w-8 h-18 bg-[#111216] dark:bg-[#3F4142] rounded-full relative flex  justify-center p-2 transition-colors duration-300 ${isDark ?"items-end":"items-start"} ` }
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      <span
        className={` left-1 w-4 h-4 rounded-full bg-[#F4CBDF] shadow-md transform transition-transform duration-300 `}
      />
    </button>

    <svg width="13" height="16" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M3.06981 4C3.06981 2.275 4.29136 0.809007 6 0.247757C5.52082 0.090257 5.00537 0 4.46509 0C1.99909 0 0 1.791 0 4C0 6.20925 1.99909 8 4.46509 8C5.00537 8 5.52082 7.90974 6 7.75224C4.29136 7.19099 3.06981 5.72525 3.06981 4Z"
 fill={`${isDark?"#3F4142":"#111216"}`} />
</svg>

    </div>
  );
}


