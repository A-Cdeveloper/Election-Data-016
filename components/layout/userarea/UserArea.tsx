import UserInfo from "./UserInfo";
import Logout from "./Logout";

const UserArea = () => {
  return (
    <div className="flex items-center gap-2">
      <UserInfo name="John Doe" email="john.doe@example.com" />
      <Logout />
    </div>
  );
};

export default UserArea;
