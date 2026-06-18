import React from 'react';

export default function Logo() {
  return (
    <div className="flex flex-col font-sans leading-none tracking-tight font-extrabold text-[28px] select-none">
      {/* Remote Line */}
      <div className="flex items-end text-[#52A7D2]">
        <div className="relative flex items-center">
          <span className="relative z-10">R</span>
          {/* White Triangle overlapping bottom-left of R */}
          <div className="absolute bottom-[3px] -left-[3px] w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-white z-20"></div>
        </div>
        <span>emote</span>
      </div>
      
      {/* Recruit Line (Indented) */}
      <div className="flex items-end text-white -mt-1 ml-6">
        <div className="relative flex items-center">
          <span className="relative z-10">R</span>
          {/* Light Blue Circle overlapping bottom-left of R */}
          <div className="absolute bottom-[3px] -left-[3px] w-3 h-3 bg-[#52A7D2] rounded-full z-20"></div>
        </div>
        <span>ecruit</span>
      </div>
    </div>
  );
}
