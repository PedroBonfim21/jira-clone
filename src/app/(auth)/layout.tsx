import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) =>{
  return(
    //mudar neutral-300 to 100
    <main className="bg-neutral-300 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" height={56} width={152} alt="logo" />
            <Button variant="secondary">
              Sign-up
            </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;