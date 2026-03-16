import { Button } from "@/components/button";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <header className="w-full h-14 bg-[#1c39bb]">
        <MaxWidthWrapper className="h-full flex justify-between items-center">
          <Link href="/" className="text-white font-semibold text-3xl">
            Atlas
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href="/" className="text-white">
              Home
            </Link>
            <SignInButton mode="modal">
              <Button variant="outline" className="border-white text-white">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="border-white bg-white text-[#1c39bb]">
                Sign Up
              </Button>
            </SignUpButton>
          </nav>
        </MaxWidthWrapper>
      </header>
      <MaxWidthWrapper className="py-20 space-y-20">{children}</MaxWidthWrapper>
    </div>
  );
}
