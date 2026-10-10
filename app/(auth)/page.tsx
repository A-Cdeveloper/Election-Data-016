import APPLogo from "@/components/layout/Logo";
import LoginFormular from "@/features/auth/components/LoginFormular";

const AuthPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <APPLogo className="mb-6" />
      <LoginFormular />
    </div>
  );
};

export default AuthPage;
