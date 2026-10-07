"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

const NavLink = ({
  href,
  children,
  className = "",
  onNavigate,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`text-sm font-medium uppercase cursor-pointer hover:text-primary ${isActive ? "text-primary" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
