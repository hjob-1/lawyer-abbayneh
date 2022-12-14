import { useInView } from "react-intersection-observer";

export const UseScroll = (min_height = 0.1) => {
  const controls = "job";
  const [ref, inview] = useInView({ threshold: min_height });

  if (inview) {
    // controls.start("visible");
  } else {
    // controls.start("hidden");
  }

  return [ref, controls];
};
