import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="bg-card flex items-center justify-between p-6 md:py-8 xl:px-32 xl:py-16">
      <div>&copy;{new Date().getFullYear()} Falinantenaina</div>
      <div className="flex items-center gap-x-8">
        <Link
          href="https://www.linkedin.com/in/falinantenaina-ranaivojaona-42ba8133b/"
          target="_blank"
          className="flex items-center gap-x-2"
          aria-label="Instagram"
        >
          <Instagram className="text-primary" />
          <span className="max-xl:hidden">Instagram</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/falinantenaina-ranaivojaona-42ba8133b/"
          target="_blank"
          className="flex items-center gap-x-2"
          aria-label="Linkedin"
        >
          <Linkedin className="text-primary" />
          <span className="max-xl:hidden">Linkedin</span>
        </Link>
        <Link
          href="https://github.com/Falinantenaina1"
          target="_blank"
          className="flex items-center gap-x-2"
          aria-label="Github"
        >
          <Github className="text-primary" />
          <span className="max-xl:hidden">Github</span>
        </Link>
      </div>
    </div>
  );
};
