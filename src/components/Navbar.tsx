import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { shadow } from "@/styles/utils";
import { Button } from "@/components/ui/button";
// import  { DarkModeToggle }  from "@/components/DarkModeToggle";
import   DarkModeToggle   from "@/components/DarkModeToggle";
import LogoutButton  from "@/components/LogoutButton";
import { getUser } from "@/auth/server";
import { SidebarTrigger } from "@/components/ui/sidebar";

async function Navbar() {
//   const user = await getUser();
  const user = null; // Placeholder for user authentication logic
  return (
    <header
      className="bg-popover small:px-8 relative flex h-24 w-full items-center justify-between px-3"
      style={{
        // boxShadow: shadow,
      }}
    >
      <SidebarTrigger className="absolute left-1 top-1 h-full" />
      <Link href="/" className="flex items-center px-5">
        <Image
          alt="Logo"
          src="/logo.png"
          height={60}
          width={60}
          className="rounded-full"
          priority
        ></Image>
        <h1 className="flex flex-col px-1 pb-1 text-2xl leading-6 font-semibold">
          StudySnap
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
            <LogoutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/signup" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Navbar;