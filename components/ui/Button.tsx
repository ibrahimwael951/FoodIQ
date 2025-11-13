"use client";
import { FadeUp } from "@/lib/Animation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface props {
  className?: string;
  hoverDivStyle?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  Animate?: boolean;
  changeColor?: boolean;
}
const Button: React.FC<props> = ({
  href,
  className,
  children,
  hoverDivStyle,
  Animate = false,
  changeColor,
  onClick,
}) => {
  const route = useRouter();
  if (href)
    return (
      <Link href={href}>
        <motion.div
          {...(Animate ? FadeUp : undefined)}
          initial="rest"
          whileHover="hover"
          variants={{
            rest: { y: 0 },
            hover: { y: -2 },
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={() => onClick}
          className={cn(
            `group relative px-5 py-3 border  rounded-2xl overflow-hidden 
          ${
            changeColor
              ? "bg-secondary border-secondary hover:border-primary"
              : "border-neutral-300/80 dark:border-white/20 hover:border-secondary"
          } 
          `,
            className
          )}
        >
          <div
            className={`z-10 relative group-hover:text-white ${
              changeColor && "text-white!"
            }  duration-200`}
          >
            {children}
          </div>
          <motion.div
            variants={{
              rest: { x: "100%", y: "100%" },
              hover: { x: "0", y: "0" },
            }}
            transition={{ duration: 0.2 }}
            className={cn(
              `absolute bottom-0 right-0 h-[120%] w-[120%] ${
                changeColor ? " bg-primary " : " bg-secondary text-white "
              } rounded-2xl z-0`,
              hoverDivStyle
            )}
          />
        </motion.div>
      </Link>
    );
  return (
    <motion.div {...(Animate ? FadeUp : undefined)}>
      <motion.button
        initial="rest"
        whileHover="hover"
        variants={{
          rest: { y: 0 },
          hover: { y: -2 },
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        className={cn(
          `group relative px-5 py-3 border  rounded-2xl overflow-hidden 
          ${
            changeColor
              ? "bg-secondary border-secondary hover:border-primary"
              : "border-neutral-300/80 dark:border-white/20 hover:border-secondary"
          } 
          `,
          className
        )}
      >
        <div className=" z-10 relative group-hover:text-white duration-200">
          {children}
        </div>
        <motion.div
          variants={{
            rest: { x: "100%", y: "100%" },
            hover: { x: "0", y: "0" },
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            `absolute bottom-0 right-0 h-[120%] w-[120%] ${
              changeColor ? " bg-primary " : " bg-secondary "
            } rounded-2xl z-0`,
            hoverDivStyle
          )}
        />
      </motion.button>
    </motion.div>
  );
};

export default Button;
