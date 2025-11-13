"use client";
import { FadeUpAnimation } from "@/lib/Animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20 lg:mt-0 lg:gap-14 max-w-2xl lg:max-w-7xl mx-auto">
      <div className="relative w-full lg:w-2/4 mb-10 ">
        <motion.img
          {...FadeUpAnimation}
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3V3c2RrNGQ3eTlpbndpODgxdmZqMzlibjNudjk3emdlemp1emNjeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/w5UGdHEKT7uU0/giphy.gif"
          alt="About_hero_food"
          className="rounded-2xl h-[450px] w-full object-cover"
        />
      </div>
      <div className="w-full lg:w-2/4 space-y-10">
        <motion.h1 {...FadeUpAnimation} className="font-semibold">
          {" "}
          healthy food for everyone.
        </motion.h1>
        <motion.p {...FadeUpAnimation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt
          eius dicta, a itaque minima, reiciendis laboriosam, assumenda
          perspiciatis asperiores voluptate enim veritatis hic in ab repudiandae
          aliquid ex sed.
        </motion.p>
        <motion.p {...FadeUpAnimation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          perspiciatis saepe aut
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
