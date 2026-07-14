import { motion } from "framer-motion";
import CamiloImg from "../assets/LinkdnProfile-noBg.png";
import BackToTopButton from "./BackToTopButton";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center text-paper bg-ink px-6 sm:px-10 md:pl-32 py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-center max-w-5xl w-full mx-auto md:mx-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative hidden sm:block w-[240px] mx-auto md:mx-0"
        >
          <div className="relative rounded-2xl overflow-hidden border border-line">
            <img
              src={CamiloImg}
              alt={t.about.imageAlt}
              className="w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-signal ring-4 ring-ink" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-signal mb-3">{t.about.eyebrow}</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-paper mb-8">
            {t.about.title}
          </h2>

          <div className="bg-panel border border-line rounded-2xl p-6 sm:p-8 space-y-4">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className="text-fog text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            {t.about.focusAreas.map((area) => (
              <span
                key={area}
                className="font-mono text-xs text-signal border border-signal/30 rounded-full px-3 py-1.5"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <BackToTopButton />
    </section>
  );
}
