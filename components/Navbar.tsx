"use client";
import { Main } from "@/data/MainLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoFastFoodOutline } from "react-icons/io5";
import Button from "./ui/Button";
import { FadeDownAnimation } from "@/lib/Animation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const pathName = usePathname();
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <motion.nav
        {...FadeDownAnimation}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="w-full h-20 max-w-7xl mx-auto flex justify-between items-center gap-4 bg-neutral-100 dark:bg-neutral-950  px-5 py-5 lg:px-10 rounded-b-4xl shadow">
          <Link
            href="/"
            className="flex text-3xl md:text-4xl items-center gap-2 font-semibold"
          >
            <IoFastFoodOutline className="text-secondary" size={40} /> FoodIQ
          </Link>

          <div className="hidden md:flex items-center gap-5  ">
            {Main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                rounded-2xl hover:bg-primary/40 py-1 px-3 duration-150 
                ${pathName === item.href && "bg-primary text-white"} 
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              className="flex items-center justify-center md:hidden"
              onClick={() => setMenu(!menu)}
            >
              <BiMenu size={30} />
            </Button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menu && (
          <motion.div
            {...FadeDownAnimation}
            className="fixed top-20 md:hidden left-0 bg-white/60 dark:bg-black/60 w-full z-0 space-y-5 pt-10 py-5 z-40"
          >
            {Main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenu(false)}
                className={`
                       flex items-center gap-2 rounded-2xl hover:bg-primary/40 py-3 px-4 text-2xl duration-150
                    ${pathName === item.href && "bg-primary text-white"} 
                `}
              >
                <item.icon size={30} />
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
