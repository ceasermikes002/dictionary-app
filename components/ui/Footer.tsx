import React from 'react';
import { Instagram, Github } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-1 text-center fixed bottom-0 left-0 w-full flex justify-center items-center gap-4">
      <Link href="https://github.com/ceasermikes002" target="_blank" rel="noopener noreferrer">
        <Github size="20" />
      </Link>
      <Link href="https://www.instagram.com/_.ctech_/" target="_blank" rel="noopener noreferrer">
        <Instagram size="20" />
      </Link>
      <Link href={"https://chima-portfolio.vercel.app"} className="text-xs">&copy; {new Date().getFullYear()} C-Tech👑</Link>
    </footer>
  );
};

export default Footer;
