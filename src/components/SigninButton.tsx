"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Bookmark, LogOut, ShoppingCart } from "lucide-react";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto items-center">
        <Image
          src={session.user.image ?? ""}
          alt={session.user.name ?? ""}
          className=" rounded-full"
          width={32}
          height={32}
        />

        <DropdownMenu>
          <DropdownMenuTrigger>{session.user.name}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/profile">
              <DropdownMenuItem className="hover:cursor-pointer">
                <ShoppingCart className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="hover:cursor-pointer">
              <Bookmark className="mr-2 h-4 w-4" />
              <span>Bookmark</span>
            </DropdownMenuItem>
            <button onClick={() => signOut()} className="text-red-600 w-full">
              <DropdownMenuItem className="hover:cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="font-bold text-green-600 ml-auto">
      Sign In
    </button>
  );
};

export default SigninButton;
