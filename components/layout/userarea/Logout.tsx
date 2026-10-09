import { logoutAction } from "@/features/auth/actions/logout";
import { Button } from "../../ui/button";
import { LogOutIcon } from "lucide-react";

const Logout = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="cursor-pointer"
      onClick={logoutAction}
    >
      <LogOutIcon className="w-6 h-6" />
    </Button>
  );
};

export default Logout;
