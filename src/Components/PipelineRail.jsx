import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const STAGES = ["inicio", "about", "projects", "skills", "contact"];

export default function PipelineRail() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const step = 1 / (STAGES.length - 1);
    setActive(Math.min(STAGES.length - 1, Math.round(v / step)));
  });

  return (
    <>
      {/* Desktop vertical rail */}
      <div
        aria-hidden
        className="hidden md:flex fixed left-8 top-24 bottom-8 z-30 flex-col items-center"
      >
        <div className="relative w-px flex-1 bg-line">
          <motion.div
            className="absolute top-0 left-0 w-px bg-signal origin-top"
            style={{ height: `${(active / (STAGES.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between">
          {STAGES.map((stage, i) => (
            <span
              key={stage}
              className={`w-2 h-2 rounded-full -translate-x-[3.5px] transition-colors duration-500 ${
                i <= active ? "bg-signal" : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile top progress bar */}
      <div
        aria-hidden
        className="md:hidden fixed top-16 inset-x-0 h-[2px] bg-line z-30 origin-left"
      >
        <motion.div
          className="h-full bg-signal origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </>
  );
}
