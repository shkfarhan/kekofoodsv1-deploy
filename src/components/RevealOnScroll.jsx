import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { relative } from "path";
//import { useInView } from "react-intersection-observer";

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  /*const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Change this value as per your requirement
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
*/
  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        // initial="hidden"
        // animate={controls}
        // variants={{
        //   hidden: { opacity: 0, y: 20, x: 45, transform: "scale(0)" },
        //   visible: { opacity: 1, y: 0, x: 0, transform: "scale(1)" },
        // }}
        // transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#3c3ce9",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default RevealOnScroll;
