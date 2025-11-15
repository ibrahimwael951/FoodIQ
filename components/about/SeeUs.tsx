"use client";
import { FadeAnimation, FadeUp, FadeUpAnimation } from "@/lib/Animation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Button from "../ui/Button";
import { BiX } from "react-icons/bi";

const SeeUs = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    if (menuOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, [menuOpen]);
  return (
    <>
      <section className="relative  flex flex-col justify-center items-center gap-3">
        <Image
          src="/Restaurant.jpg"
          alt="BackGround"
          width={2000}
          height={2000}
          className="absolute top-0 left-0 w-full h-screen object-cover opacity-40 -z-10 select-none"
        />
        <motion.div
          {...FadeUp}
          onClick={() => setMenuOpen(true)}
          className="bg-white text-secondary w-20 h-20 p-7 rounded-full flex justify-center items-center hover:bg-secondary hover:text-white duration-100 cursor-pointer"
        >
          <FaPlay size={50} />
        </motion.div>
        <motion.h1 {...FadeUp} className="font-semibold">
          See Our <span className="text-secondary"> Restaurants </span>
        </motion.h1>
        <motion.p {...FadeUp}>We hope you can come visit us </motion.p>
      </section>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            {...FadeAnimation}
            className="fixed top-0 left-0 h-screen w-full bg-black/70 flex justify-center items-center overflow-y-scroll z-50"
          >
            <Button
              changeColor
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 text-2xl"
            >
              <BiX />
            </Button>
            <motion.div
              {...FadeUpAnimation}
              className=" bg-white dark:bg-black border border-neutral-500 p-10 rounded-2xl "
            >
              <img
                src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cmZnZjlhcW1iazByYnIzOXZ2aWlnZTg4ZHV6eWF1NHZmeXpyY2dhMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VekcnHOwOI5So/giphy.gif"
                alt="Coding Cat"
                className="rounded-2xl"
              />
              <h1>Im still Coding it</h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SeeUs;
