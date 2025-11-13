"use client";
import { FadeUp } from "@/lib/Animation";
import { motion } from "framer-motion";
const FAQs = [
  {
    Q: "What is Foodie Doing ?",
    A: "Foodie its just a web :)",
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
  return (
    <section className="my-20 space-y-5">
      <div className="mx-auto w-fit flex flex-col justify-center items-center gap-2 max-w-xl text-center">
        <motion.h1 {...FadeUp} className="font-bold">
          FAQ<span className="text-secondary">s</span>{" "}
        </motion.h1>
        <motion.span {...FadeUp} className="text-xs text-secondary">
          {" "}
          FAQs not Important at all{" "}
        </motion.span>
        <motion.p {...FadeUp}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          sequi ex. Laborum, perspiciatis{" "}
        </motion.p>
      </div>
      <div className="w-full max-w-3xl mx-auto grid grid-cols-1  gap-4 text-white! ">
        {FAQs.map((item, i) => (
          <motion.div
            key={i}
            {...FadeUp}
            className="group w-full h-40 bg-primary rounded-2xl overflow-hidden duration-200"
          >
            <h4 className="h-52 group-hover:h-20 min-h-fit p-5 bg-secondary duration-200 ">
              {item.Q}
            </h4>
            <p className="text-white! p-5">{item.A}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
