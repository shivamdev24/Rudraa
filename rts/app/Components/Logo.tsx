"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DarkLogo from "../../public/DarkLogo.png";
import LightLogo from "../../public/LightLogo.png";

function Logo() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleThemeChange = () => {
      const darkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(darkMode ? "dark" : "light");
    };

    handleThemeChange(); // Check the theme on initial load

    // Listen for changes in the theme
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addListener(handleThemeChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeListener(handleThemeChange);
    };
  }, []);

  return (
    <div>
      <Link href="/" className="relative">
        <Image
          className="object-cover w-56 h-14 "
          src={theme === "dark" ? LightLogo : DarkLogo}
          alt="Your Company"
          width={1000}
          height={1000}
        />
      </Link>
    </div>
  );
}

export default Logo;
