import React from 'react';
import { Calendar, Star } from 'lucide-react';

const Updates = () => {
  const updates = [
    {
      date: "15.3.2024",
      title: "Nový ekonomický systém",
      description: "Kompletně přepracovaný ekonomický systém s novými možnostmi výdělku a investic.",
      isHighlight: true
    },
    {
      date: "10.3.2024",
      title: "Aktualizace vozidel",
      description: "Přidáno 15 nových vozidel včetně customizace a vylepšení fyziky."
    },
    {
      date: "5.3.2024",
      title: "Nové pracovní příležitosti",
      description: "Přidány 3 nové práce: Realitní makléř, Právník a Mechanik."
    }
  ];

  return (
    <div className="bg-gray-900 py-24" id="updates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Poslední aktualizace</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Neustále pracujeme na vylepšování serveru. Zde jsou nejnovější změny a vylepšení.
          </p>
        </div>
        
        <div className="space-y-6">
          {updates.map((update, index) => (
            <div key={index} className={`bg-gray-800 p-6 rounded-xl border ${update.isHighlight ? 'border-lime-500' : 'border-lime-500/10'}`}>
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-lime-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">{update.date}</span>
                    {update.isHighlight && (
                      <span className="flex items-center gap-1 text-lime-400 text-sm">
                        <Star className="h-4 w-4" /> Hlavní update
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">{update.title}</h3>
                  <p className="text-gray-400 mt-2">{update.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;