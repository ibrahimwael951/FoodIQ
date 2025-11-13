import { IconType } from "react-icons";
import { BsInfoLg } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import {
  MdDinnerDining,
  MdFreeBreakfast,
  MdLunchDining,
  MdOutlineMenuBook,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export interface Links {
  name: string;
  href: string;
  icon: IconType;
}
export const Main: Links[] = [
  { name: "Home", href: "/", icon: IoHome },
  { name: "About", href: "/about", icon: BsInfoLg },
  { name: "Menu", href: "/menu", icon: MdOutlineMenuBook },
  { name: "Products", href: "/food", icon: MdProductionQuantityLimits },
  { name: "Contact", href: "/contact", icon: RiContactsFill },
];

export const utilityPages: Links[] = [
  { name: "Breakfast", href: "/breakfast", icon: MdFreeBreakfast },
  { name: "Dinner", href: "/dinner", icon: MdDinnerDining },
  { name: "Lunch", href: "/lunch", icon: MdLunchDining },
];
