import UserInfo from "./UserInfo";
import Logout from "./Logout";
import { getSession } from "@/features/auth/utils/session";
import { findUserById } from "@/features/auth/queries";
const UserArea = async () => {
  const session = await getSession();
  if (!session) {
    return null;
  }
  const user = await findUserById(session.userId);

  console.log(user);
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
