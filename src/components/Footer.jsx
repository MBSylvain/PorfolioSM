import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-grayDark dark:bg-gray-900 text-grayLight dark:text-gray-200 font-sans">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors text-2xl"><FaLinkedin /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors text-2xl"><FaGithub /></a>
        <a href="mailto:contact@email.com" aria-label="Email" className="hover:text-primary transition-colors text-2xl"><FaEnvelope /></a>
      </div>
      <div>© Sylvain MBEUMOU 2025 - Tous droits réservés</div>
    </footer>
  );
}
