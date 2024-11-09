import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/50 backdrop-blur-lg fixed w-full z-50 border-b border-lime-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Terminal className="h-8 w-8 text-lime-400" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-lime-400 hover:text-lime-300 px-3 py-2 rounded-md text-sm font-medium">Domů</a>
                <a href="#features" className="text-gray-300 hover:text-lime-400 px-3 py-2 rounded-md text-sm font-medium">Funkce</a>
                <a href="#rules" className="text-gray-300 hover:text-lime-400 px-3 py-2 rounded-md text-sm font-medium">Pravidla</a>
                <a href="#updates" className="text-gray-300 hover:text-lime-400 px-3 py-2 rounded-md text-sm font-medium">Aktualizace</a>
                <a 
                  href="https://discord.gg/Y3T6EM3K3E" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-lime-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-lime-500 hover:bg-lime-400 text-gray-900 font-bold py-2 px-4 rounded-lg transition-all">
              Připojit se
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-lime-400 hover:text-lime-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-lime-400 block px-3 py-2 rounded-md text-base font-medium">Domů</a>
            <a href="#features" className="text-gray-300 hover:text-lime-400 block px-3 py-2 rounded-md text-base font-medium">Funkce</a>
            <a href="#rules" className="text-gray-300 hover:text-lime-400 block px-3 py-2 rounded-md text-base font-medium">Pravidla</a>
            <a href="#updates" className="text-gray-300 hover:text-lime-400 block px-3 py-2 rounded-md text-base font-medium">Aktualizace</a>
            <a 
              href="https://discord.gg/Y3T6EM3K3E" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-lime-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Discord
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;