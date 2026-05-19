"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const ActiveLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} onClick={onClick} className={isActive ? "md:text-(--accent) underline-offset-4 text-background underline decoration-1 md:no-underline" : "hover:text-(--accent) transition-all transition-discrete"}>
      {children}
    </Link>
  );
};

export default ActiveLink;
