"use client";
import { FadeUp } from "@/lib/Animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiSolidDish } from "react-icons/bi";
import { LuDessert } from "react-icons/lu";
import { MdFreeBreakfast } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";

const menu = [
  {
    type: "BreakFast",
    icon: MdFreeBreakfast,
  },
  {
    type: "Main Dishes",
    icon: BiSolidDish,
  },
  {
    type: "Drinks",
    icon: RiDrinks2Fill,
  },
  {
    type: "Desserts",
    icon: LuDessert,
  },
];
const MotionLink = motion.create(Link);

const Categories = () => {
  return (
    <section className="min-h-fit! mb-20">
      <motion.h1 {...FadeUp} className="text-center mb-10 font-semibold">
        What Our <span className="text-secondary"> Customers </span> Say
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl lg:max-w-7xl mx-auto">
        {menu.map((item) => (
          <MotionLink
            key={item.type}
            {...FadeUp}
            whileTap={{ scale: 0.97 , transition:{duration:0.02}}}
            href={"/menu"}
            className="group flex flex-col justify-center items-center gap-5 p-5 2xl:p-8 text-center rounded-3xl border border-primary/20 hover:text-white hover:bg-primary duration-100 "
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <item.icon
                size={35}
                className="w-20 h-20 p-4 text-primary bg-primary/20 rounded-full group-hover:text-white group-hover:bg-white/20 "
              />
              <h4 className="font-semibold">{item.type}</h4>
            </div>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              libero reprehenderit
            </h6>
            <span className=" border-b-2 border-transparent text-secondary font-bold hover:border-secondary duration-100">
              Explore Menu
            </span>
          </MotionLink>
        ))}
      </div>
    </section>
  );
};

export default Categories;
