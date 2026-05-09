"use client";
import Image from "next/image";
import { NavigationText } from "../typography";
import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";

import ActiveLink from "./ActiveLink";
const Header = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <ul className="md:flex md:justify-between md:gap-20 grid align-center gap-10 text-center">
        <li>
          <ActiveLink href="/forestilling">
            <NavigationText text="Forestilling" font={open === true ? `font-serif` : `font-helvetica`} size={open === true ? `var(--step-4)` : `var(--step-0)`} />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/workshop">
            <NavigationText text="Workshop" font={open === true ? `font-serif` : `font-helvetica`} size={open === true ? `var(--step-4)` : `var(--step-0)`} />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/audition">
            <NavigationText text="Audition" font={open === true ? `font-serif` : `font-helvetica`} size={open === true ? `var(--step-4)` : `var(--step-0)`} />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/oppdrag">
            <NavigationText text="Oppdrag" font={open === true ? `font-serif` : `font-helvetica`} size={open === true ? `var(--step-4)` : `var(--step-0)`} />
          </ActiveLink>
        </li>
      </ul>
    </>
  );
  return (
    <header className="grid col-(--content-col) grid-cols-subgrid h-30 sticky top-0 z-20 bg-background">
      <section className="flex justify-between items-center">
        <ActiveLink href="/" className="cursor-pointer">
          {" "}
          <Image src="/assets/Logo_Original.svg" width={60} height={60} alt="Logo" loading="eager" />
        </ActiveLink>

        <button className="cursor-pointer md:hidden -mr-2" onClick={() => setOpen((open) => !open)} aria-label="Open menu">
          <RxHamburgerMenu size={40} />
        </button>
        <div className="hidden md:block">{links}</div>
      </section>
      {open && (
        <div className="grid col-(--project-col) grid-cols-subgrid md:hidden fixed inset-0 z-50 bg-(--accent)">
          <div className="grid grid-cols-subgrid col-content-col">
            <div className="flex justify-between text-background p-10">
              <Image src="/assets/Logo_Light.svg" width={60} height={60} alt="Logo" loading="eager" />
              <button className="cursor-pointer" onClick={() => setOpen((s) => !s)} aria-label="Close menu">
                <VscClose size={40} />
              </button>
            </div>
            <div className="flex justify-center items-start my-20 h-screen text-background">{links}</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
