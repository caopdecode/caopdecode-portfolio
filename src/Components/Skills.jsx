import { motion } from "framer-motion";
import { FaReact, FaJava, FaPython, FaAws } from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiN8N,
  SiClaude,
} from "react-icons/si";
import BackToTopButton from "./BackToTopButton";
import { useLanguage } from "../i18n/LanguageContext";
import { SKILL_GROUPS } from "../i18n/content";

const ICONS = {
  React: FaReact,
  TypeScript: SiTypescript,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  Python: FaPython,
  PostgreSQL: SiPostgresql,
  AWS: FaAws,
  n8n: SiN8N,
  Claude: SiClaude,
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex flex-col justify-center text-paper px-6 sm:px-10 md:pl-32 py-24 bg-ink"
    >
      <div className="max-w-5xl w-full mx-auto md:mx-0">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-signal mb-3"
        >
          {t.skills.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-semibold text-4xl sm:text-5xl text-paper mb-10"
        >
          {t.skills.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="bg-panel border border-line rounded-2xl p-6"
            >
              <p className="font-mono text-xs text-signal mb-4">
                {t.skills.groups[group.id]}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.icons.map((name) => {
                  const Icon = ICONS[name];
                  return (
                    <span
                      key={name}
                      className="flex items-center gap-2 bg-panel-2 border border-line rounded-lg px-3 py-2 text-sm text-paper hover:border-signal/50 transition-colors duration-300"
                    >
                      <Icon size={16} className="text-signal shrink-0" />
                      {name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BackToTopButton />
    </section>
  );
}
