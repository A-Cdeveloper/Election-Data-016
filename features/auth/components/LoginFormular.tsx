import CustomInput from "@/components/custom/CustomInput";
import { Button } from "@/components/ui/button";

const LoginFormular = () => {
  return (
    <form className="flex flex-col gap-4 w-full max-w-md">
      <CustomInput id="email" name="email" placeholder="Email" />
      <CustomInput id="password" name="password" placeholder="Password" />
      <Button
        type="submit"
        variant="default"
        className="w-full rounded-none font-nunito-sans font-semibold text-base h-10 uppercase cursor-pointer"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginFormular;
