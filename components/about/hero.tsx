"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20 lg:mt-0 lg:gap-14 max-w-2xl lg:max-w-7xl mx-auto">
      <div className="relative w-full lg:w-2/4 mb-10 ">
        <Image
          src="/Food/About_hero_food.avif"
          alt="About_hero_food"
          height={1000}
          width={1000}
          className="rounded-2xl h-[450px] w-4/5 object-cover"
        />
        <div className="absolute -bottom-16 -right-4 md:-right-10 w-80 md:w-96 h-72 md:h-80 bg-primary rounded-3xl p-5 text-white flex flex-col justify-evenly items-start gap-5">
          <h3>Connect Us</h3>
          <span className="flex items-center gap-2 text-xl opacity-75">
            <BiPhone />
            +1234567890
          </span>
          <span className="flex items-center gap-2 text-xl opacity-75">
            <MdEmail />
            example@gmail.com
          </span>
          <span className="flex items-center gap-2 text-xl opacity-75">
            <BiLocationPlus />
            Lorem ipsum dolor sit amet
          </span>
        </div>
      </div>
      <div className="w-full lg:w-2/4 space-y-10">
        <h1 className="font-semibold"> healthy food for everyone.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt
          eius dicta, a itaque minima, reiciendis laboriosam, assumenda
          perspiciatis asperiores voluptate enim veritatis hic in ab repudiandae
          aliquid ex sed.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          perspiciatis saepe aut
        </p>
      </div>
    </section>
  );
};

export default Hero;
