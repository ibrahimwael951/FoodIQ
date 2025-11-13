"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { FadeUpAnimation } from "@/lib/Animation";

const Hero = () => {
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
          <Button changeColor href="/signUp" Animate>
            Join Us
          </Button>
          <Button href="/signUp" Animate>
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
