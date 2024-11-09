import React from 'react';
import { Shield, Users, GamepadIcon, Terminal } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-lime-400" />,
      title: "Pokročilý Anti-Cheat",
      description: "Špičkový systém ochrany zajišťující férovou hru pro všechny"
    },
    {
      icon: <Users className="h-8 w-8 text-lime-400" />,
      title: "Aktivní Komunita",
      description: "Připojte se k naší rostoucí komunitě oddaných hráčů"
    },
    {
      icon: <GamepadIcon className="h-8 w-8 text-lime-400" />,
      title: "Vlastní Skripty",
      description: "Unikátní herní mechaniky a funkce, které jinde nenajdete"
    },
    {
      icon: <Terminal className="h-8 w-8 text-lime-400" />,
      title: "Pravidelné Aktualizace",
      description: "Neustálá vylepšení a přidávání nového obsahu"
    }
  ];

  return (
    <div className="bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Proč zvolit Vesperu?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Zažijte roleplay jako nikdy předtím s našimi unikátními funkcemi a oddanou komunitou.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl border border-lime-500/10 hover:border-lime-500/30 transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;