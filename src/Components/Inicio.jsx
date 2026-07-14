import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "../i18n/LanguageContext";

const NODES = [
  { cx: 40, cy: 30 },
  { cx: 140, cy: 70 },
  { cx: 90, cy: 160 },
  { cx: 190, cy: 190 },
];

export default function Inicio() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative h-screen w-full flex items-center text-paper bg-ink overflow-hidden px-6 sm:px-10 md:pl-32 pt-16"
    >
      <svg
        aria-hidden
        viewBox="0 0 220 220"
        className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-72 h-72 opacity-70"
      >
        {[
          [0, 1],
          [1, 2],
          [2, 3],
        ].map(([a, b], i) => (
          <motion.line
            key={i}
            x1={NODES[a].cx}
            y1={NODES[a].cy}
            x2={NODES[b].cx}
            y2={NODES[b].cy}
            stroke="#232B33"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.2 }}
          />
        ))}
        {NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r="4"
            fill="#2DD4BF"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6 font-mono text-sm text-fog"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-signal"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {t.hero.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-5xl sm:text-7xl text-paper leading-[1.05] mb-4"
        >
          {t.hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-mono text-lg sm:text-xl text-signal mb-4"
        >
          {t.hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-fog text-base sm:text-lg max-w-md mb-10"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          <ScrollLink
            to="projects"
            smooth
            duration={600}
            className="px-6 py-3 rounded-lg bg-signal text-ink font-semibold text-sm hover:bg-paper transition-colors duration-300 cursor-pointer"
          >
            {t.hero.ctaPrimary}
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            duration={600}
            className="px-6 py-3 rounded-lg border border-line text-paper font-semibold text-sm hover:border-signal hover:text-signal transition-colors duration-300 cursor-pointer"
          >
            {t.hero.ctaSecondary}
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
