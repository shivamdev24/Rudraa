"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import Link from 'next/link'
import Image from "next/image";
import Logo from "../../favicon.ico"



const navigation = [
  { name: "About us", href: "about"},
  { name: "Services", href: "service" },
  { name: "Contact", href: "contact" },
];



export default function Example() {
   const pathname = usePathname();
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 z-50 w-full bg-white text-black dark:bg-black dark:text-white"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2  ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      className="h-8 w-auto"
                      src={Logo}
                      alt="Your Company"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`link ${
                          pathname === "/" ? "active" : ""
                        } hover:text-blue-500`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden fixed top-14 right-0 z-50 bg-white dark:bg-black w-56 h-screen ">
            <div className="flex flex-col px-4 ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`link ${
                    pathname === "/" ? "active" : ""
                  } py-2 px-4 hover:bg-blue-100 hover:text-blue-600 rounded`}
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
