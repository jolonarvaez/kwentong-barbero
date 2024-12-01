"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import NavLink from "../reusables/nav-links";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect } from "react";

const links = [
  {
    title: "Our Story",
    href: "/about-us",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Location",
    href: "/location",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav className="bg-dark-blue text-white py-6 px-4">
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-evenly items-center max-w-screen-lg mx-auto">
        <div>
          <NavLink href={links[0].href}>{links[0].title}</NavLink>
        </div>
        <div>
          <NavLink href={links[1].href}>{links[1].title}</NavLink>
        </div>
        <div>
          <NavLink href={links[2].href}>{links[2].title}</NavLink>
        </div>
        <NavLink href="/">
          <Image
            src="/kb-logo.png"
            alt="Kwentong Barbero"
            width={200}
            height={150}
          />
        </NavLink>
        <div>
          <NavLink href={links[3].href}>{links[3].title}</NavLink>
        </div>
        <div>
          <NavLink href={links[4].href}>{links[4].title}</NavLink>
        </div>
        <div>
          <NavLink href={links[5].href}>{links[5].title}</NavLink>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden justify-between items-center">
        <div>
          <NavLink href="/">
            <Image
              src="/kb-logo.png"
              alt="Kwentong Barbero"
              width={512}
              height={512}
              style={{
                width: 90,
                height: "auto",
              }}
            />
          </NavLink>
        </div>

        <Sheet>
          <SheetTrigger className="w-[44px] h-[44px] grid place-items-center border rounded border-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.6665 5.00002C1.6665 4.53978 2.0396 4.16669 2.49984 4.16669H17.4998C17.9601 4.16669 18.3332 4.53978 18.3332 5.00002C18.3332 5.46026 17.9601 5.83335 17.4998 5.83335H2.49984C2.0396 5.83335 1.6665 5.46026 1.6665 5.00002Z"
                fill="white"
              />
              <path
                d="M1.6665 10C1.6665 9.53978 2.0396 9.16669 2.49984 9.16669H17.4998C17.9601 9.16669 18.3332 9.53978 18.3332 10C18.3332 10.4603 17.9601 10.8334 17.4998 10.8334H2.49984C2.0396 10.8334 1.6665 10.4603 1.6665 10Z"
                fill="white"
              />
              <path
                d="M2.49984 14.1667C2.0396 14.1667 1.6665 14.5398 1.6665 15C1.6665 15.4603 2.0396 15.8334 2.49984 15.8334H17.4998C17.9601 15.8334 18.3332 15.4603 18.3332 15C18.3332 14.5398 17.9601 14.1667 17.4998 14.1667H2.49984Z"
                fill="white"
              />
            </svg>
          </SheetTrigger>
          <SheetContent className="w-screen !max-w-screen-xl">
            <SheetHeader>
              {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
              <SheetDescription>
                <div className="flex flex-col">
                  <SheetClose asChild>
                    <NavLink href="/">Home</NavLink>
                  </SheetClose>
                  {links.map((link) => (
                    <div key={link.href}>
                      <SheetClose asChild>
                        <NavLink href={link.href}>{link.title}</NavLink>
                      </SheetClose>
                    </div>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
