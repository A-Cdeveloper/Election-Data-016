import { Button } from "../../ui/button";
import { LogOutIcon } from "lucide-react";

const Logout = () => {
  return (
    <Button variant="ghost" size="icon" className="cursor-pointer">
      <LogOutIcon className="w-6 h-6" />
    </Button>
  );
};

export default Logout;
