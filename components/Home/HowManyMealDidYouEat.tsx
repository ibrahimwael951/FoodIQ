"use client";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { BiX } from "react-icons/bi";
import { FadeAnimation, FadeUpAnimation } from "@/lib/Animation";
interface reaction {
  image: string;
  text: string;
}
const CatReaction = {
  Wow: {
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXRxajY0eWdsbmZqZDE2dDZ5ZGd5ZXV6aGZ4anlpOWVzeG9uZ2VpayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5i7umUqAOYYEw/giphy.gif",
    text: "Dude, howww???",
  },
  angry: {
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXNlM2Nka2JubG1zZm1zeTBiMGxsbGJhZTRyYWhtcmNhZjJ6eHFwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GAXXHdS0zXawVLOJLY/giphy.gif",
    text: "im gonna tell your parents",
  },
  Happy: {
    image:
      "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YTgxajdvdXZjMWNqMTVwMzM2Z3FkcmhsZWNpa2pxejE5bWF0ZGcxYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3q2zVr6cu95nF6O4/giphy.gif",
    text: "Lets gooo , you did well",
  },
  fr: {
    image:
      "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NDNkOHozYTJmMDRtNWk5YWszcDFqNjhiM2Nlb3BweHF6b21jd3lmYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4HvpyPwMBnSBNjcYRB/giphy.gif",
    text: "Thats you when I tell your parents, and they send you to your room because you have eaten all the food in the house ",
  },
  SuperFat: {
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzl6OGFobDA2MmpkaXpzdzB1MDJjZHFycDJpZTNmdTduaDF4eHFzOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NQ3SGAMneQ920/giphy.gif",
    text: "YOU ARE BIGGER THAN THISS CAT ",
  },
  PlzStoop: {
    image:
      "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXdpbjdqbXBtc210ZXkxc3dlZnhuMThxN2l1b3Rtd3RrZmc5dWNhYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JOjGbeFoOPL2/giphy.gif",
    text: "PLZ STOPPP EATING  ",
  },
  SuperOne: {
    image:
      "https://imgs.search.brave.com/Q-TFLIuegEgjEqqXXPzHx-IEAzDAr6hz7AnSnnDo6JY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzczL2Uz/LzQ1LzczZTM0NWUy/OTIzNDE0YmFkNmU4/MTkwM2Q1MzAyNDVi/LmpwZw",
    text: "congratulations, you got Guinness World Records For fattest one in the world  ",
  },
};
const HowManyMealDidYouEat = () => {
  const [number, setNumber] = useState<number>(0);
  const [Reaction, setReaction] = useState<reaction | null>(null);
  const HandleBtn = (number: number) => {
    if (number >= 1 && number <= 2) {
      setReaction(CatReaction.angry);
    } else if (number >= 3 && number <= 4) {
      setReaction(CatReaction.Happy);
    } else if (number >= 5 && number <= 6) {
      setReaction(CatReaction.fr);
    }
    if (number >= 7 && number <= 10) {
      setReaction(CatReaction.Wow);
    }
    if (number >= 10 && number <= 12) {
      setReaction(CatReaction.SuperFat);
    }
    if (number >= 12 && number <= 15) {
      setReaction(CatReaction.PlzStoop);
    }
    if (number >= 16) {
      setReaction(CatReaction.SuperOne);
    }
    setNumber(0);
  };

  useEffect(() => {
    if (Reaction) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, [Reaction]);

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
        <div className="rounded-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            {number ? (
              <motion.img
                key={"Conform"}
                {...FadeAnimation}
                src={
                  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXlsbDg2ZDZndm0xYzJuczNwdnk5NnIyNDZ6NnNmd2piMTI2OWJqMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AORI3Pcli9JHG/giphy.gif"
                }
                alt="parrot ? "
                loading="lazy"
                className="w-96 h-96"
              />
            ) : (
              <motion.img
                key={"pickNumber"}
                {...FadeAnimation}
                src={
                  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Mzc0N25qdGRxcGR4Ymk1MHBwdGpydGUzcGlndjZ6d2UzcjdjbnB2aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gR1NzFShIVq5FDgySX/giphy.gif"
                }
                alt="parrot ? "
                loading="lazy"
                className="w-96 h-96"
              />
            )}
          </AnimatePresence>
        </div>
        <motion.div {...FadeAnimation} className="w-full lg:w-2/4">
          <AnimatePresence mode="wait">
            {number ? (
              <motion.div key={"Conform"} {...FadeAnimation}>
                <h1>
                  <span className="text-secondary">{number}</span> Meals!, Are
                  You Sure?
                </h1>
                <div className="flex flex-wrap gap-2 mt-10">
                  <Button changeColor onClick={() => HandleBtn(number)} className="text-2xl">
                    {" "}
                    Yes!{" "}
                  </Button>
                  <Button onClick={() => setNumber(0)} className="text-2xl"> No! </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div key={"pickNumber"} {...FadeAnimation}>
                <h1>How Many Meals did you eat today?</h1>
                <div className="flex flex-wrap gap-2 mt-10">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                    (item) => (
                      <div
                        key={item}
                        onClick={() => setNumber(item)}
                        className="w-14 lg:w-20 h-14 lg:h-20 flex justify-center items-center text-2xl font-semibold bg-secondary text-white hover:text-secondary hover:bg-transparent border border-secondary rounded-3xl duration-150 cursor-pointer"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
      <AnimatePresence>
        {Reaction && (
          <motion.div
            {...FadeAnimation}
            className="fixed top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center px-5 lg:px-10 py-28 overflow-y-scroll z-50"
          >
            <motion.div
              {...FadeUpAnimation}
              className="relative p-10 bg-white dark:bg-black w-full min-h-96 max-w-4xl rounded-2xl overflow-hidden flex flex-col lg:flex-row justify-center items-center gap-5"
            >
              <Button
                onClick={() => setReaction(null)}
                changeColor
                className="absolute top-0 right-0 rounded-none rounded-bl-2xl text-3xl"
              >
                <BiX />
              </Button>
              <img
                src={Reaction.image}
                alt="parrot ? "
                className="w-96 rounded-3xl max-h-96"
              />
              <h3>{Reaction.text}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HowManyMealDidYouEat;
