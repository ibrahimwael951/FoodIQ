"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./ui/Button";
import { FadeAnimation, FadeUpAnimation } from "@/lib/Animation";
import { BiX } from "react-icons/bi";

const AskParrot = () => {
  const [mood, setMood] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);

  useEffect(() => {
    if (!send) return;
    setLoading(true);
    const timer = setTimeout(() => {
      setOpenMenu(true);
      setLoading(false);
      setSend(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [send]);

  useEffect(() => {
    if (loading || openMenu) {
      window.document.body.style.overflow = "hidden";
    } else if (!loading && !openMenu) {
      window.document.body.style.overflow = "auto";
    }
  }, [openMenu, loading]);

  return (
    <>
      <motion.section className="max-w-xl mx-auto space-y-5">
        <h1 className="text-center font-bold">
          Ask <span className="text-secondary"> Parrot </span>
        </h1>
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/MS_Parrot.png"
            alt="Parrot image"
            width={1000}
            height={1000}
            className="w-full max-w-xl max-h-96 object-cover "
          />

          <p className="absolute bottom-0 left-0 bg-primary text-white! w-full p-2 text-center">
            Hi!! tell me what is your mood today and i will give you meal
          </p>
        </div>
        <div>
          <textarea
            name=""
            id=""
            onChange={(e) => setMood(e.target.value)}
            placeholder="Tell MR.Parrot what is your mood"
            className="min-h-20 max-h-52 w-full max-w-xl  border-2 border-primary rounded-2xl outline-none ring-2 ring-transparent focus:ring-primary/80 p-4 mb-2 duration-100 "
          ></textarea>{" "}
          <Button
            className="w-full mb-3"
            changeColor
            onClick={() => setSend(true)}
          >
            Send
          </Button>
          <p className="text-xs! text-center">He is not AI dont worry</p>
        </div>
      </motion.section>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key={"Loading"}
            {...FadeAnimation}
            className="fixed top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center z-50 overflow-y-scroll"
          >
            <motion.div
              {...FadeUpAnimation}
              className="w-xl min-h-96 p-10 bg-white dark:bg-black border border-neutral-500 rounded-3xl "
            >
              <img
                src="https://imgs.search.brave.com/T42vH_FqQGvhpXRmAKKit6wX4161QtYEGal113vh1CY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/bUticXIxc1NJWlVB/QUFBTS9idWRnaWUt/dGhpbmtpbmcuZ2lm.gif"
                alt="Parrot thinking"
                className="w-full rounded-4xl"
              />
              <h4 className="text-center mt-2 font-bold"> Let Me think</h4>
            </motion.div>
          </motion.div>
        ) : (
          openMenu && (
            <motion.div
              key={"Loading"}
              {...FadeAnimation}
              className="fixed top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center z-50 overflow-y-scroll"
            >
              <Button
                changeColor
                onClick={() => setOpenMenu(false)}
                className="absolute top-5 right-5 text-2xl"
              >
                <BiX />
              </Button>
              <motion.div
                {...FadeUpAnimation}
                className="p-10 bg-white dark:bg-black border border-neutral-500 rounded-3xl max-w-xl"
              >
                <motion.img
                  key={"OpenedMenu"}
                  {...FadeUpAnimation}
                  src={
                    "https://media1.tenor.com/m/fHDW3ZveNS0AAAAd/bird-gumi.gif"
                  }
                  alt="Parrot image"
                  className="w-full max-w-xl max-h-96 object-cover rounded-3xl "
                />
                <h4 className="mt-4">
                  {" "}
                  <span className="text-secondary font-bold">
                    {mood.trim()}, {mood.trim()}
                  </span>
                  . iam not{" "}
                  <span className="text-secondary font-bold"> AI </span>
                  to answer You
                </h4>
              </motion.div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </>
  );
};

export default AskParrot;
