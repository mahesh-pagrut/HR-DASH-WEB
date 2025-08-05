import React from 'react';
import { FiLogOut } from 'react-icons/fi';

const Plan = () => {
  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Mahesh Pagrut</p>
          <p className="text-stone-500">2025</p>
        </div>
        <button className="flex items-center gap-1 px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded">
          <FiLogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Plan;
