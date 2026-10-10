import UserInfo from "./UserInfo";
import Logout from "./Logout";
import { getCurrentUser } from "@/features/auth/utils/auth";
const UserArea = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }
  return (
    <div className="flex items-center gap-2">
      <UserInfo name={user.name} email={user.email} />
      <Logout />
    </div>
  );
};

export default UserArea;
