"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={isActive ? "gradient-underline-sm text-(--accent)" : "hover:text-(--accent) transition-all transition-discrete"}>
      {children}
    </Link>
  );
};

export default ActiveLink;
