import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import Link from "next/link";

type UserProps = {
  name: string;
  email: string;
};

const UserInfo = ({ name, email }: UserProps) => {
  return (
    <Link href={`mailto:${email}`} className="flex items-center gap-2">
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
    </Link>
  );
};

export default UserInfo;
