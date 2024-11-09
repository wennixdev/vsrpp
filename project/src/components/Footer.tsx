import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-lime-500/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-8 w-8 text-lime-400" />
              <span className="text-2xl font-bold text-white">Vespera RP</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Připojte se k nové generaci FiveM roleplay. Zažijte unikátní gameplay, vlastní funkce a skvělou komunitu.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-lime-400">Domů</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-lime-400">Funkce</a></li>
              <li><a href="#rules" className="text-gray-400 hover:text-lime-400">Pravidla</a></li>
              <li><a href="#updates" className="text-gray-400 hover:text-lime-400">Aktualizace</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Sociální sítě</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://discord.gg/Y3T6EM3K3E" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-lime-400"
                >
                  Discord
                </a>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-lime-400">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-400">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-400">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Vespera Roleplay. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;