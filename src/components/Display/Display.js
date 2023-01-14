import React from 'react';

export default function Display({ pajamas, slippers, tea, book }) {
  return (
    <div>
      <img src={`/images/${pajamas}.png`} />
      <img src={`/images/${slippers}.png`} />
      <img src={`/images/${tea}.png`} />
      <p>{book}</p>
    </div>
  );
}
