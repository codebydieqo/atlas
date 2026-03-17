import { Button } from "@/components/button";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <header className="w-full h-14 bg-[#1c39bb] sticky top-0 z-999">
        <MaxWidthWrapper className="h-full flex justify-between items-center">
          <Link href="/" className="text-white font-semibold text-3xl">
            Atlas
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#features" className="text-white">
              Features
            </a>
            <a href="#benefits" className="text-white">
              Benefits
            </a>
            <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"}>
              <Button className="border-white bg-white text-[#1c39bb]">
                Get Started
              </Button>
            </SignInButton>
          </nav>
        </MaxWidthWrapper>
      </header>
      <MaxWidthWrapper className="py-20 space-y-20">{children}</MaxWidthWrapper>
      <div className="w-full h-125 bg-[#1c39bb] flex flex-col justify-center items-center gap-5">
        <p className="text-7xl font-semibold text-white">
          Ready To Transform Your Life?
        </p>
        <p className="text-white">
          Join the people who are already living more intentionally with Atlas
        </p>
        <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"}>
          <Button
            variant="primary"
            className="bg-white border-white text-[#1c39bb] text-lg px-5 py-2"
          >
            Get Started for Free
          </Button>
        </SignInButton>
      </div>
    </div>
  );
}
