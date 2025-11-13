"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { FadeUpAnimation } from "@/lib/Animation";
import { useState } from "react";

const Hero = () => {
  const [ShowSigma, setShowSigma] = useState<boolean>(false);
  return (
    <main className="relative flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 text-center mt-20 lg:mt-0  overflow-hidden">
      <div className="  w-full lg:w-2/4 p-10 rounded-2xl z-10 max-w-xl">
        <motion.h1 {...FadeUpAnimation} className="font-semibold mb-4 ">
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
          <Button changeColor href="/JoinUs" Animate>
            Join Us
          </Button>
          <Button href="/menu" Animate>
            Explore Menu
          </Button>
        </div>
      </div>
      <motion.div
        {...FadeUpAnimation}
        onClick={() => setShowSigma(!ShowSigma)}
        className="relative group w-full lg:w-2/5 overflow-hidden rounded-3xl max-w-xl "
      >
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3hrMmUyamZqcTFiZDkwb3k0aDd5OGgzdzY4b2t4YWxuZG90NWdseiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KHhs4BXpy5dba/giphy.gif"
          alt="Cat eating"
          loading="lazy"
          className={` w-full object-cover ${ShowSigma && "opacity-0"} `}
        />

        <div className="absolute bottom-0 left-0 w-full h-14 flex justify-center items-center text-xl font-bold bg-secondary  ">
          <span className="lg:hidden">Tap Me</span>
          <span className="hidden lg:block">Click Me</span>
        </div>

        {ShowSigma && (
          <>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dG1wdmk0YjF0eHZvem42ajhhYTg3cTk3MmVzeWp2ajZoaGtkamZldiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kbFsizndPM9gRsw335/giphy.gif"
              alt="Cat eating"
              className="absolute top-2/4 left-2/4 -translate-2/4  w-full object-cover duration-100 "
            />
            <div className="absolute bottom-0 left-0 w-full h-14 flex justify-center items-center text-xl font-bold  bg-secondary duration-100">
              Be look like Sigma Cat and Eat healthy Food
            </div>
          </>
        )}
      </motion.div>
    </main>
  );
};

export default Hero;
