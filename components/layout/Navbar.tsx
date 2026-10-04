import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="flex gap-8">
      <NavLink href="/homepage">Home</NavLink>
      <NavLink href="/places">Biračka mesta</NavLink>
      <NavLink href="/reports">Izveštaj</NavLink>
    </nav>
  );
};

export default Navbar;
