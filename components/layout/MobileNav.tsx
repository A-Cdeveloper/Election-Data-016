"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import NavLink from "@/components/layout/NavLink";
import { navLinks } from "@/components/layout/nav-links";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <div ref={panelRef} className="relative">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="cursor-pointer"
        aria-expanded={open}
        aria-label={open ? "Zatvori meni" : "Otvori meni"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </Button>

      <div
        className={cn(
          "absolute top-full right-0 z-50 mt-2 min-w-48 rounded-md border border-border bg-popover p-2 shadow-md",
          open ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="block rounded-sm px-3 py-2 hover:bg-accent"
              onNavigate={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
