import { motion } from "framer-motion";

const gradients = {
  inicio: { from: "#232325", to: "#4C4C4C", direction: "to-br" },
  about: { from: "#232325", to: "#4C4C4C", direction: "to-tl" },
  projects: { from: "#174FA6", to: "#091E40", direction: "to-bl" },
  skills: { from: "#174FA6", to: "#091E40", direction: "to-tr" },
  contact: { from: "#232325", to: "#4C4C4C", direction: "to-t" },
};

export default function BackgroundLayer({ section }) {
  const gradient = gradients[section] || gradients.inicio;
  const gradientString = `linear-gradient(${gradient.direction}, ${gradient.from}, ${gradient.to})`;

  console.log("Gradiente activo:", gradientString);

  return (
    <motion.div
      key={section}
      className="fixed inset-0 -z-10 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        backgroundImage: gradientString,
      }}
      transition={{ duration: 1 }}
    />
  );
}