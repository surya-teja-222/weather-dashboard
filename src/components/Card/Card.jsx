import React from 'react';

export default function Card({
  title,
  value,
  icon,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{value}</p>
      <img src={icon} alt={title} />
    </div>
  );
}
