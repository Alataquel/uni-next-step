import { useEffect, RefObject } from "react";
import { useInView } from "framer-motion";

export const useScrollAnimation = (ref: RefObject<HTMLElement>) => {
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return isInView;
};
