"use client";
import { FadeUp } from "@/lib/Animation";
import { motion } from "framer-motion";
const Customer = [
  {
    name: "Fat Cat",
    img: "/Customers/Fat_white_cat.webp",
    message:
      "im too lazy to go to store and figure out what i will eat today, and Apolo told me this app would help me, but it didnt. maybe i will do some work out",
    role: "Big Pillow",
  },
  {
    name: "Crazy Parrot",
    img: "/Customers/Crazy_Parrot.jpg",
    message: "Why doesnt this app sell any food?? im hungryyyyyyyyyy",
    role: "4 AM  Alarm",
  },
  {
    name: "Dog",
    img: "/Customers/Pace_dog.jpg",
    message:
      "what?. food website ? idk man my mom gives me food every day, so i dont want this app",
    role: "Lazy Dog",
  },
];
const Customers = () => {
  return (
    <section>
      <motion.h1 {...FadeUp} className="text-center mb-10 font-semibold">
        What Our <span className="text-secondary"> Customers </span> Say
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Customer.map((item) => (
          <motion.div
            key={item.name}
            {...FadeUp}
            className="w-full h-full py-5 px-4 rounded-3xl border border-secondary flex flex-col justify-between gap-5 hover:bg-secondary hover:text-white duration-150"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-4xl"
                />
                <h2>{item.name}</h2>
              </div>
              <h5>{item.message}</h5>
            </div>
            <span>
              <span className="text-secondary text-lg font-semibold">
                Job:{" "}
              </span>
              {item.role}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
