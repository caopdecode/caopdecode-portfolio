import { ArrowUpIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function BackToTopButton() {
  return (
    <div className="absolute bottom-6 right-6 z-50">
      <ScrollLink
        to="inicio"
        smooth={true}
        duration={800}
        className="bg-panel border border-line hover:border-signal hover:text-signal text-fog p-3 rounded-full shadow-lg cursor-pointer transition-colors duration-300 flex items-center justify-center"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </ScrollLink>
    </div>
  );
}