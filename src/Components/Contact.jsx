import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BackToTopButton from "./BackToTopButton";
import { useLanguage } from "../i18n/LanguageContext";
import { CONTACT_EMAIL, SOCIALS } from "../i18n/content";

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
};

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-between text-paper bg-ink"
    >
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-signal mb-3"
        >
          {t.contact.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-semibold text-4xl sm:text-5xl text-paper mb-6"
        >
          {t.contact.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-fog max-w-lg mb-8"
        >
          {t.contact.description}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 bg-signal hover:bg-paper text-ink font-semibold font-mono text-sm px-6 py-3 rounded-lg transition-colors duration-300"
        >
          {t.contact.ctaLabel} {CONTACT_EMAIL}
        </motion.a>
      </div>
      <BackToTopButton />
      <footer className="flex justify-center gap-8 w-full items-center p-6 border-t border-line">
        {SOCIALS.map((social) => {
          const Icon = SOCIAL_ICONS[social.id];
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fog hover:text-signal hover:scale-110 transition-all duration-300"
            >
              <Icon size={24} />
            </a>
          );
        })}
      </footer>
    </section>
  );
}
