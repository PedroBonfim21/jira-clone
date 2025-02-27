"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) =>{
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";

  return(
    //mudar neutral-300 to 100
    <main className="bg-neutral-300 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" height={56} width={152} alt="logo" />
            <Button asChild variant="secondary">
              <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                {isSignIn ? "Sign Up" : "Login"}
              </Link>
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