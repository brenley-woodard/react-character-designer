import React from 'react';

export default function Controls({ pajamas, setPajamas, slippers, setSlippers, tea, setTea }) {

  const handlePajamaChange = (event) => {
    setPajamas(event.target.value);
  };
  const handleSlipperChange = (event) => {
    setSlippers(event.target.value);
  };
  const handleTeaChange = (event) => {
    setTea(event.target.value);
  };
    // event.target.name === 'pajamas' && setPajamas(event.target.value);
    // event.target.name === 'slippers' && setSlippers(event.target.value);
  return (
    <div className='controls'>
      <select name="pajamas" value={pajamas} onChange={handlePajamaChange}>
        <option value="black">Black</option>
        <option value="cozy">Cozy</option>
        <option value="robe">Robe</option>
      </select>
      <select name="slippers" value={slippers} onChange={handleSlipperChange}>
        <option value="checkered">Checkered</option>
        <option value="grey">Grey</option>
        <option value="uggs">Uggs</option>
      </select>
      <select name="tea" value={tea} onChange={handleTeaChange}>
        <option value="bedtime">Bedtime</option>
        <option value="chamomile">Chamomile</option>
        <option value="peppermint">Peppermint</option>
      </select>
    </div>
  );
}
