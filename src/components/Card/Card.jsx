import React from 'react';

export default function Card({
  title,
  value,
  icon,
  cardColor,
}) {
  return (
    <div
      className="bg-[#FFC470] flex flex-col justify-center gap-3 items-center p-4 rounded-2xl w-[250px] h-[250px]"
      style={{
        background: cardColor,
      }}
    >
      <img src={icon} alt={title} className=" w-[80px] h-[80px]" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-lg">{value}</p>
    </div>
  );
}
