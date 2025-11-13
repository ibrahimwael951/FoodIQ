"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { FadeUpAnimation } from "@/lib/Animation";
import { useUser } from "@clerk/nextjs";

const Hero = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  if (!isLoaded && !user)
    return (
      <main className="flex flex-col justify-center items-center gap-4 text-2xl">
        <div className="w-32 h-32 border border-secondary border-t-transparent animate-spin rounded-full" />
        Loading...
      </main>
    );
  if (isSignedIn)
    return (
      <div className="mt-20 px-5 lg:px-10 ">
        <h1>
          Welcome <span className="text-secondary">{user.fullName}</span>
        </h1>
      </div>
    );
  return (
    <main className="relative flex justify-center items-center text-center overflow-hidden">
      <div className="  p-10 rounded-2xl z-10 ">
        <motion.h1 {...FadeUpAnimation} className="font-semibold mb-4 max-w-xl">
          Best food for your taste
        </motion.h1>
        <motion.h6
          {...FadeUpAnimation}
          className="text-lg md:text-xl lg:text-2xl opacity-70 mb-5"
        >
          Find out what is meal you gonna bite today , <br />
          and Check Your Snacks is it healthy or not
        </motion.h6>
        <div className="flex items-center justify-center gap-5 text-xl ">
          <Button changeColor href="/sign-up" Animate>
            Join Us
          </Button>
          <Button href="/menu" Animate>
            Explore Menu
          </Button>
        </div>
      </div>
      <Image
        src="/Food/Hero.jpg"
        alt="Hero BackGround"
        width={2000}
        height={2000}
        className="absolute top-0 left-0 h-full w-full object-cover -z-10 opacity-60"
      />
    </main>
  );
};

export default Hero;
