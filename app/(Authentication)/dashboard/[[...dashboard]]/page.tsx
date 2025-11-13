"use client";
import { dark, experimental__simple } from "@clerk/themes";
import { useTheme } from "next-themes";
import { UserButton, UserProfile } from "@clerk/nextjs";

export default function Page() {
  const { resolvedTheme } = useTheme();

  return (
    <main className="mt-24 flex justify-center  ">
      <UserProfile
        appearance={{
          theme: resolvedTheme === "dark" ? dark : experimental__simple,
        }}
      />
      <UserButton
        appearance={{
          theme: resolvedTheme === "dark" ? dark : experimental__simple,
        }}
      />
    </main>
  );
}
