"use client";
import Image from "next/image";
import { NavigationText } from "../typography";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";

import ActiveLink from "./ActiveLink";
const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = (
    <>
      <ul className="md:flex md:justify-between md:gap-20 grid align-center gap-10 text-center">
        <li>
          <ActiveLink href="/forestilling" onClick={() => setOpen(false)}>
            <NavigationText text="Forestilling" font={open === true ? `font-serif` : `font-helvetica`} size={open === true ? `var(--step-4)` : `var(--step-0)`} />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/workshop" onClick={() => setOpen(false)}>
            <NavigationText text="Workshop" font={open === true ? `font-serif` : `font-helvetica`} size={open === true ? `var(--step-4)` : `var(--step-0)`} />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/audition" onClick={() => setOpen(false)}>
            <NavigationText text="Audition" font={open === true ? `font-serif` : `font-helvetica`} size={open === true ? `var(--step-4)` : `var(--step-0)`} />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/oppdrag" onClick={() => setOpen(false)}>
            <NavigationText text="Oppdrag" font={open === true ? `font-serif` : `font-helvetica`} size={open === true ? `var(--step-4)` : `var(--step-0)`} />
          </ActiveLink>
        </li>
      </ul>
    </>
  );
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <section className={`grid grid-cols-(--project-grid-cols) ${open ? "bg-(--accent)" : pathname === "/" ? "bg-transparent" : "bg-background"}`}>
        <div className="col-(--content-col) flex items-center h-30 justify-between">
          <ActiveLink href="/" className="cursor-pointer" onClick={() => setOpen(false)}>
            <Image src={open ? "/assets/Logo_Light.svg" : "/assets/Logo_Original.svg"} width={60} height={60} alt="Logo" loading="eager" />
          </ActiveLink>
          <button className="cursor-pointer md:hidden -mr-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <VscClose size={40} className="text-background" /> : <RxHamburgerMenu size={40} />}
          </button>
          <div className="hidden md:block">{links}</div>
        </div>
        {open && (
          <div className="col-(--full-col) grid grid-cols-subgrid md:hidden bg-(--accent) h-screen text-background">
            <div className="flex col-(--content-col) justify-center items-start pt-20">{links}</div>
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;
