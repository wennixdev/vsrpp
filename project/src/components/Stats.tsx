import React from 'react';

const Stats = () => {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-800 rounded-xl border border-lime-500/10">
            <div className="text-4xl font-bold text-lime-400 mb-2">500+</div>
            <div className="text-gray-300">Aktivních Hráčů</div>
          </div>
          <div className="text-center p-8 bg-gray-800 rounded-xl border border-lime-500/10">
            <div className="text-4xl font-bold text-lime-400 mb-2">50+</div>
            <div className="text-gray-300">Unikátních Povolání</div>
          </div>
          <div className="text-center p-8 bg-gray-800 rounded-xl border border-lime-500/10">
            <div className="text-4xl font-bold text-lime-400 mb-2">24/7</div>
            <div className="text-gray-300">Podpora</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;