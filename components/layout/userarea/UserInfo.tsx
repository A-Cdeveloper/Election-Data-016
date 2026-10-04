import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

type UserProps = {
  name: string;
  email: string;
};

const UserInfo = ({ name, email }: UserProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={email} />
        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <p className="text-sm font-medium uppercase">{name}</p>
    </div>
  );
};

export default UserInfo;
