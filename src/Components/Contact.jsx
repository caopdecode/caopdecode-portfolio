import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact({ onEnter }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  
      useEffect(() => {
          if (inView) {
      console.log("SECCIÓN EN VISTA");
      onEnter(); // cambia el fondo
    }
      }, [inView]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="h-screen w-full flex flex-col justify-between text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Texto principal */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center px-6 text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{once: false, amount: 0.3}}
      >
        <h2 className="text-5xl font-bold text-[#3B82F6] mb-6">CONTACT</h2>
        <p className="text-base text-[#D6D6D6] max-w-lg mb-6">
          I’m always open to exciting new opportunities and collaborations.
          Let’s connect and build something impactful together!
        </p>
        <a
          href="mailto:caopdecode@gmail.com"
          className="bg-[#3B82F6] hover:bg-[#9FE870] hover:text-[#3B82F6] text-[#232325] font-semibold px-6 py-3 rounded-xl shadow-lg transition-colors"
        >
          Contact me → caopdecode.contact@gmail.com
        </a>
      </motion.div>

      {/* Footer con íconos */}
      <motion.footer
        className="bg-[#091E40] flex justify-center gap-8 w-full items-center p-5 border-t border-[#091E40]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{once: false, amount: 0.3}}
      >
        <a
          href="https://x.com/caopdecode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9FE870] hover:scale-110 transition-transform"
        >
          <FaXTwitter size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/caopdecode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9FE870] hover:scale-110 transition-transform"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://www.instagram.com/caopdecode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9FE870] hover:scale-110 transition-transform"
        >
          <FaInstagram size={28} />
        </a>
      </motion.footer>
    </motion.section>
  );
}
