import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Nav() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 sm:px-10 h-16">
          <ScrollLink
            to="inicio"
            smooth
            duration={600}
            className="flex flex-col leading-none cursor-pointer group"
          >
            <span className="font-display font-semibold text-paper text-base sm:text-lg group-hover:text-signal transition-colors duration-300">
              {t.nav.brand}
            </span>
            <span className="font-mono text-[11px] text-fog tracking-wide">
              {t.nav.brandTag}
            </span>
          </ScrollLink>

          <nav className="hidden md:flex items-center gap-8">
            {t.nav.links.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                spy
                activeClass="text-signal"
                className="font-mono text-sm text-fog hover:text-paper transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </ScrollLink>
            ))}
            <button
              onClick={toggleLang}
              className="font-mono text-xs border border-line rounded-full px-3 py-1.5 text-fog hover:text-signal hover:border-signal transition-colors duration-300 cursor-pointer"
              aria-label="Toggle language"
            >
              {lang.toUpperCase()} / {t.nav.langToggle}
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleLang}
              className="font-mono text-xs border border-line rounded-full px-2.5 py-1 text-fog"
              aria-label="Toggle language"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="text-paper cursor-pointer"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink flex flex-col md:hidden"
          >
            <div className="flex justify-end px-6 h-16 items-center">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-paper cursor-pointer"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {t.nav.links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={600}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-paper hover:text-signal transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </ScrollLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
