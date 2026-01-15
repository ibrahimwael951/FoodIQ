"use client";
import { FadeUp } from "@/lib/Animation";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLessThan } from "react-icons/fa";
const FAQs = [
  {
    Q: "What is FoodIQ Doing ?",
    A: "FoodIQ its just a web :)",
  },
  {
    Q: "what do you mean by just web ?",
    A: "what do you think i mean ? its just web application for Food",
  },
  {
    Q: "do you selling Food ?",
    A: "nope",
  },
  {
    Q: "so what is this app doing ? ",
    A: "show your food Quantity ",
  },
  {
    Q: "thats all ?",
    A: "nope its shows you how to cook your Meal and make your parents proud :)",
  },
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  return (
    <section className="my-20 space-y-5">
      <div className="mx-auto w-fit flex flex-col justify-center items-center gap-2 max-w-xl text-center">
        <motion.h1 {...FadeUp} className="font-bold">
          FAQ<span className="text-secondary">s</span>
        </motion.h1>
        <motion.span {...FadeUp} className="text-secondary">
          FAQs not Important at all
        </motion.span>
      </div>
      <div className="w-full max-w-3xl mx-auto grid grid-cols-1  gap-4 text-white! ">
        {FAQs.map((item, i) => (
          <motion.div
            key={i}
            {...FadeUp}
            onClick={() => setOpenFAQ(openFAQ == i ? null : i)}
            className={` w-full ${
              openFAQ == i ? "h-40" : "h-20"
            } relative group bg-secondary border border-secondary text-white hover:bg-transparent hover:text-secondary rounded-2xl overflow-hidden duration-200 cursor-pointer `}
          >
            <h4 className="relative min-h-fit text-lg p-5 duration-200 ">
              {item.Q}

              <FaLessThan
                className={`absolute top-2/4 right-5 -translate-y-2/4 duration-200 ${
                  openFAQ == i && "-rotate-45"
                }`}
                size={25}
                strokeWidth={7}
              />
            </h4>
            <p className="text-white! group-hover:text-secondary! p-5">{item.A}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
