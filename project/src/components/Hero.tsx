import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544726982-b414d58f51af?auto=format&fit=crop&q=80"
          alt="Los Santos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
            Vítejte ve <span className="text-lime-400">Vespera</span> Roleplay
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Zažijte novou generaci FiveM roleplay na našem serveru s vlastními skripty, unikátními povoláními a propracovaným ekonomickým systémem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button className="bg-lime-500 hover:bg-lime-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-all flex items-center justify-center gap-2">
              Připojit se <ExternalLink className="h-5 w-5" />
            </button>
            <a 
              href="https://discord.gg/Y3T6EM3K3E" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-all inline-flex items-center justify-center"
            >
              Discord komunita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;