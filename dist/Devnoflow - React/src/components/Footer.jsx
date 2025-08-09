import React from 'react';
import { Instagram, Smartphone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900/50 border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12 text-center">
        <img 
          src="http://devnoflow.com.br/images/2.png?_wwcv=12" 
          alt="DevNoFlow Logo" 
          className="h-10 mx-auto"
        />
        <div className="flex justify-center items-center space-x-6 mt-8">
          <a 
            href="https://www.instagram.com/devnoflow" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://wa.me/5551994408307" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Smartphone className="w-6 h-6" />
          </a>
          <a 
            href="mailto:contato@devnoflow.com.br" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          © 2025 DevNoFlow. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

