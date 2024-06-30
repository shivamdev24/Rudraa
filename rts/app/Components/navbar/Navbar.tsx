"use client";

import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../Logo"

const navigation = [
  { name: "About us", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Contact", href: "/contact" },
];

export default function Example() {
  const pathname = usePathname();
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
    <Disclosure
      as="nav"
      className="fixed top-0 z-50 w-full bg-white text-black dark:bg-black shadow dark:text-white"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                 <Logo/>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`link ${
                          pathname === item.href ? "active" : ""
                        } hover:text-blue-500 font-medium text-lg`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden fixed top-16 pt-5 right-0 z-50 bg-white dark:bg-black w-56 h-screen">
            <div className="flex flex-col px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`link ${
                    pathname === item.href ? "active" : ""
                  } py-2 px-4 hover:bg-blue-100 hover:text-blue-600 rounded font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
