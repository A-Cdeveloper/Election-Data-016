import APPLogo from "./Logo";
import Navbar from "./Navbar";
import UserArea from "./userarea/UserArea";

const Header = () => {
  return (
    <header className="flex justify-between h-16 shrink-0 items-center border-b border-border px-6">
      <APPLogo width={160} />
      <div className="flex items-center gap-24">
        <Navbar />
        <UserArea />
      </div>
    </header>
  );
};

export default Header;
