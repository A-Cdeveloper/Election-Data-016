import APPLogo from "./Logo";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import Logout from "./userarea/Logout";
import UserArea from "./userarea/UserArea";

const Header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4 md:px-6">
      <APPLogo width={160} />

      <div className="hidden items-center gap-24 md:flex">
        <Navbar />
        <UserArea />
      </div>

      <div className="flex items-center gap-1 md:hidden">
        <MobileNav />
        <Logout />
      </div>
    </header>
  );
};

export default Header;
