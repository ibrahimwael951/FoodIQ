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

const Categories = () => {
  return (
    <section className="min-h-fit! mb-20">
      <motion.h1 {...FadeUp} className="text-center mb-10 font-semibold">
        See our food <span className="text-secondary"> Categories </span>
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl lg:max-w-7xl mx-auto">
        {menu.map((item) => (
          <motion.div
            key={item.type}
            {...FadeUp}
            whileTap={{ scale: 0.97, transition: { duration: 0.02 } }}
            className="flex flex-col justify-center items-center gap-5 p-5 2xl:p-8 text-center rounded-3xl border border-primary/20"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <item.icon
                size={35}
                className="w-20 h-20 p-4 text-primary bg-primary/20 rounded-full"
              />
              <h4 className="font-semibold">{item.type}</h4>
            </div>
            <h6>
              Do you love {item.type} food ?, Then what are you waiting for!!
              goo check it out
            </h6>
            <Link
              href={"/menu"}
              className=" border-b-2 border-transparent text-secondary font-bold hover:border-secondary duration-100"
            >
              Explore Menu
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
