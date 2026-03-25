"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { SignOutButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./button";
import Link from "next/link";

export default function AuthStatus() {
  return (
    <>
      <Authenticated>
        <Link href="/dashboard" className="text-white">
          Dashboard
        </Link>
        <SignOutButton>
          <Button variant="destructive">Sign Out</Button>
        </SignOutButton>
      </Authenticated>
      <Unauthenticated>
        <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"}>
          <Button className="border-white">Sign In</Button>
        </SignInButton>
        <SignUpButton mode="modal" fallbackRedirectUrl={"/dashboard"}>
          <Button className="border-white bg-white text-[#1c39bb]">
            Get Started
          </Button>
        </SignUpButton>
      </Unauthenticated>
    </>
  );
}
