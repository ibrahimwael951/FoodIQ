"use client";
import { motion } from "framer-motion";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaSlack } from "react-icons/fa";
import { Main, utilityPages } from "@/data/MainLinks";
import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "@/lib/Animation";

const MotionLink = motion.create(Link);
const MotionImage = motion.create(Image);

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="min-h-96 max-w-7xl mx-auto px-5 lg:px-0! grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* first col */}
        <div className="space-y-5 w-full">
          <Link
            href="/"
            className="flex text-3xl md:text-4xl items-center gap-2 font-semibold"
          >
            <IoFastFoodOutline className="text-secondary" size={40} /> FoodIQ
          </Link>
          <motion.p {...FadeUp} className="text-neutral-200/80!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic
            voluptate quis porro minima assumenda reprehenderit ex consectetur
            eligendi laudantium nulla doloremque reiciendis delectus excepturi
            non, necessitatibus vitae, deserunt cupiditate?
          </motion.p>
          <div className="flex items-center gap-4">
            {[
              { icon: FaFacebookF },
              { icon: FaSlack },
              { icon: FaInstagram },
            ].map((item, i) => (
              <motion.div key={i} {...FadeUp}>
                <item.icon className="bg-secondary text-white p-2 w-10 h-10 rounded-full hover:bg-white hover:text-black duration-100" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* second col */}
        <div className="space-y-5 w-full flex items-start gap-5 text-xl">
          <div className="space-y-3">
            <h5 className="font-semibold">Main Pages</h5>
            {Main.map((item, i) => (
              <MotionLink
                key={i}
                {...FadeUp}
                href={item.href}
                className="flex items-center gap-2 hover:translate-x-1 hover:text-secondary duration-100"
              >
                <item.icon />
                {item.name}
              </MotionLink>
            ))}
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold">Utility Pages</h5>
            {utilityPages.map((item, i) => (
              <MotionLink
                key={i}
                {...FadeUp}
                href={item.href}
                className="flex items-center gap-2 hover:translate-x-1 hover:text-secondary duration-100"
              >
                <item.icon />
                {item.name}
              </MotionLink>
            ))}
          </div>
        </div>
        {/* third col */}
        <div>
          <h5 className="mb-2">Follow Us On Instagram</h5>
          <div className="grid grid-cols-2 gap-2">
            {[
              "/Food/Classic_mael.webp",
              "/Food/Chicken.jpg",
              "/Food/BakedPotato.jpeg",
              "/Food/friedFood.jfif",
            ].map((item, i) => (
              <MotionImage
                key={i}
                {...FadeUp}
                src={item}
                alt=" Footers Images"
                height={600}
                width={600}
                className="object-cover w-full h-full rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
