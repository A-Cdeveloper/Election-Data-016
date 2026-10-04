"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ href, children, className = "" }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`text-sm font-medium uppercase cursor-pointer hover:text-primary ${isActive ? "text-primary" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
