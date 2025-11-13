"use client";
import { useUser } from "@clerk/nextjs";
import { FormEvent, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { BiUser } from "react-icons/bi";
import { FadeUpAnimation } from "@/lib/Animation";

export default function Page() {
  const { isSignedIn, user } = useUser();
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const canEdit = user ? true : false;

  useEffect(() => {
    if (!user || !isSignedIn) return;
    setEmail(`${user.emailAddresses}`);
    setName(`${user.fullName}`);
  }, [user, isSignedIn]);

  //   why should i rent server to send me email
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const Apolo = "he is soo sad rn";

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: `${process.env.NEXT_PUBLIC_CONTACT_KEY}`,
        from: "FoodIQ",
        name,
        email,
        ...(isSignedIn && { userId: user.id }),
        message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
      setLoading(false);
    } else {
      setError(result.message || result.error || "unknown error");
      setLoading(false);
    }
  }

  return (
    <section className="mt-20 lg:mt-0 flex justify-center items-center">
      <div className="flex flex-col gap-8 justify-center h-full items-center w-full">
        <motion.h1 {...FadeUpAnimation} className="font-bold">
          Contact <span className="text-secondary"> Form </span> {error}
        </motion.h1>

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-secondary rounded-2xl  z-40"
            >
              <h1 className="text-2xl font-semibold">
                message Send Successfully :)
              </h1>
              <p className="text-lg">Ty for Ur message </p>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-full flex flex-col justify-center gap-5 items-center bg-primary text-white z-40"
            >
              <h4 className="text-2xl font-semibold">
                Something went wrong :(
              </h4>
              <p className="text-lg text-white!">
                <span className="text-red-500 font-bold text-xl">Error: </span>
                {error}
              </p>
              <Button onClick={() => setError("")} className="text-white n">
                try Again
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {loading ? (
            <div className=" w-full h-96 max-w-2xl flex flex-col justify-center items-center gap-4 text-3xl">
              <div className="w-28 h-28 border border-secondary border-t-transparent animate-spin rounded-full"></div>
              Loading...
            </div>
          ) : (
            <motion.form
              {...FadeUpAnimation}
              onSubmit={handleSubmit}
              className="relative flex flex-col justify-center gap-2 w-full max-w-2xl "
            >
              <AnimatePresence>
                {canEdit && (
                  <motion.p
                    {...FadeUpAnimation}
                    className="flex flex-col items-center justify-center gap-2 text-center text-base! font-semibold  bg-red-600 w-fit mx-auto p-3 px-5 rounded-2xl "
                  >
                    <BiUser className="p-2 w-16 h-16 bg-white rounded-full text-red-600" />
                    <p className="text-white!">
                      We are using your profile Information to Contact Us
                    </p>
                    <p className="text-sm! text-white/80!">
                      Thats will help us to solve your problem and contact you
                    </p>
                  </motion.p>
                )}
              </AnimatePresence>
              <div className="flex flex-col md:flex-row gap-2 w-full ">
                <div className="w-full md:w-2/4">
                  <motion.label>Your Full Name</motion.label>
                  <motion.input
                    required
                    name="name"
                    {...FadeUpAnimation}
                    whileFocus={{ scale: 1.01 }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Your Name"
                    disabled={canEdit}
                    className="w-full border-2 border-secondary rounded-xl py-4 px-5 text-xl outline-none disabled:bg-secondary disabled:text-white"
                  />
                </div>
                <div className="w-full md:w-2/4">
                  <motion.label>Your Email</motion.label>
                  <motion.input
                    required
                    name="email"
                    {...FadeUpAnimation}
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    disabled={canEdit}
                    className="w-full border-2 border-secondary rounded-xl py-4 px-5 text-xl outline-none disabled:bg-secondary disabled:text-white"
                  />
                </div>
              </div>
              <div className="relative w-full ">
                <motion.textarea
                  required
                  name="message"
                  value={message}
                  {...FadeUpAnimation}
                  onChange={(e) => setMessage(e.target.value)}
                  whileFocus={{ scale: 1.01 }}
                  placeholder="Your Message"
                  className="border-2 border-secondary rounded-2xl p-2 outline-none min-h-40 max-h-52 w-full"
                  maxLength={500}
                />
                <p className="absolute bottom-4 left-0 flex justify-between items-center w-full text-xs! px-5">
                  {" "}
                  <span>Max Message Length</span> {message.length} / 500{" "}
                </p>
              </div>
              <motion.div {...FadeUpAnimation}>
                <Button
                  type="submit"
                  changeColor
                  className="p-4 w-full  rounded-2xl uppercase font-semibold text-xl z-0"
                >
                  Submit
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
