import React from 'react';
import { Skill } from '@/types';

export const SkillCard = ({ name, icon, category }: Skill) => {
  return (
    <div className="bg-white p-8 border border-outline-variant/30 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] group">
      <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
        <span className="material-symbols-outlined font-fill-1">
          {icon}
        </span>
      </div>
      <h3 className="text-xl font-bold text-on-surface mb-2">{name}</h3>
      <p className="text-[10px] font-bold text-on-surface-variant tracking-wider uppercase">
        {category}
      </p>
    </div>
  );
};