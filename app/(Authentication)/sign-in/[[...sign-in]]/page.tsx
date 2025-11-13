"use client";
import { SignIn } from "@clerk/nextjs";
import { dark, experimental__simple } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Page() {
  const { resolvedTheme } = useTheme();
  return (
    <section className="flex justify-center items-center ">
      <SignIn
        appearance={{
          theme: resolvedTheme === "dark" ? dark : experimental__simple,
        }}
      />
    </section>
  );
}
