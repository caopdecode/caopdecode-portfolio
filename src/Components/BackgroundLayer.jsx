import { AnimatePresence, motion } from "framer-motion";

const gradients = {
  inicio: { from: "#232325", to: "#4C4C4C", direction: "to-br" },
  about: { from: "#232325", to: "#4C4C4C", direction: "to-tl" },
  projects: { from: "#174FA6", to: "#091E40", direction: "to-bl" },
  skills: { from: "#174FA6", to: "#091E40", direction: "to-tr" },
  contact: { from: "#232325", to: "#4C4C4C", direction: "to-t" },
};

function getGradientString({ from, to, direction }) {
  const directions = {
    "to-br": "135deg",
    "to-tl": "315deg",
    "to-bl": "225deg",
    "to-tr": "45deg",
    "to-t": "0deg",
  };
  return `linear-gradient(${directions[direction] || "135deg"}, ${from}, ${to})`;
}

export default function BackgroundLayer({ section }) {
  const gradient = gradients[section] || gradients.inicio;
  const gradientString = getGradientString(gradient);

  return (
    <div
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ background: "#232325", overflow: "hidden" }} // fallback color
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: gradientString,
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </AnimatePresence>
    </div>
  );
}