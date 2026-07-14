import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import BackToTopButton from "./BackToTopButton";
import { useLanguage } from "../i18n/LanguageContext";
import { PROJECTS } from "../i18n/content";

const STATUS_STYLES = {
  screens: "text-fog border-fog/30",
  local: "text-alert border-alert/30",
  live: "text-signal border-signal/30",
};

const STATUS_DOT = {
  screens: "bg-fog",
  local: "bg-alert",
  live: "bg-signal",
};

function StatusPill({ status, label }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] border rounded-full px-2.5 py-1 ${STATUS_STYLES[status]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[status]}`} />
      {label}
    </span>
  );
}

function ProjectVisual({ project, title }) {
  const [errored, setErrored] = useState(false);
  const image = project.images?.[0];

  if (image && !errored) {
    return (
      <img
        src={image}
        alt={title}
        onError={() => setErrored(true)}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-panel-2 [background-image:repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_11px)]">
      <span className="font-display text-3xl sm:text-4xl text-line select-none">
        {title}
      </span>
    </div>
  );
}

function ProjectGallery({ images, title }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-panel-2 [background-image:repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_11px)]">
        <span className="font-display text-3xl text-line select-none">
          {title}
        </span>
      </div>
    );
  }

  const hasMultiple = images.length > 1;
  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="mb-6">
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-panel-2">
        <img
          src={images[index]}
          alt={`${title} ${index + 1}/${images.length}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-ink/60 hover:bg-ink/80 text-paper rounded-full p-1.5 transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-ink/60 hover:bg-ink/80 text-paper rounded-full p-1.5 transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
            <span className="absolute bottom-2 right-2 font-mono text-[11px] text-paper bg-ink/60 rounded-full px-2 py-0.5">
              {index + 1}/{images.length}
            </span>
          </>
        )}
      </div>
      {hasMultiple && (
        <div className="flex gap-1.5 mt-2 justify-center">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${
                i === index ? "bg-signal" : "bg-line"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState(null);

  const projects = PROJECTS.map((p) => ({ ...p, ...t.projects.items[p.id] }));
  const selected = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full text-paper flex flex-col justify-center px-6 sm:px-10 md:pl-32 py-24 bg-ink"
    >
      <div className="max-w-5xl w-full mx-auto md:mx-0">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-signal mb-3"
        >
          {t.projects.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-semibold text-4xl sm:text-5xl text-paper mb-10"
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-left rounded-2xl overflow-hidden border border-line bg-panel hover:border-signal/50 transition-colors duration-300 cursor-pointer group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ProjectVisual project={project} title={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display font-semibold text-xl text-paper group-hover:text-signal transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="text-fog text-sm mb-4 line-clamp-2">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <StatusPill
                    status={project.status}
                    label={t.projects.statusLabels[project.status]}
                  />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-panel border border-line rounded-2xl p-6 sm:p-8 text-paper w-full max-w-lg relative shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                className="absolute top-5 right-5 text-fog hover:text-signal transition-colors cursor-pointer"
                onClick={() => setSelectedId(null)}
                aria-label={t.projects.close}
              >
                <X size={24} />
              </button>

              <h3 className="font-display font-semibold text-2xl text-paper mb-2 pr-8">
                {selected.title}
              </h3>
              <div className="mb-4">
                <StatusPill
                  status={selected.status}
                  label={t.projects.statusLabels[selected.status]}
                />
              </div>
              <ProjectGallery images={selected.images} title={selected.title} />

              <p className="mb-6 text-fog leading-relaxed">{selected.description}</p>

              <p className="mb-2 font-mono text-xs text-signal">
                {t.projects.techLabel}
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {selected.tech.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-xs text-fog border border-line rounded-full px-2.5 py-1"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-signal hover:text-paper font-mono text-sm transition-colors"
                >
                  {t.projects.viewProject}
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <BackToTopButton />
    </section>
  );
}
