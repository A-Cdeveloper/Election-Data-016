import NavLink from "./NavLink";
import { navLinks } from "./nav-links";

const Navbar = () => {
  return (
    <nav className="flex gap-8">
      {navLinks.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
