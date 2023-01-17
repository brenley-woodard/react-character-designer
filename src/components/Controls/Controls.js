import React, { useState } from 'react';

export default function Controls({ pajamas, setPajamas, slippers, setSlippers, tea, setTea, book, setBook }) {
  const [pajamaCount, setPajamaCount] = useState(0);
  const [slipperCount, setSlipperCount] = useState(0);
  const [teaCount, setTeaCount] = useState(0);
  const [bookValue, setBookValue] = useState('');

  const handlePajamaChange = (event) => {
    setPajamas(event.target.value);
    setPajamaCount((currentState) => {
      return currentState + 1;
    });
  };
  const handleSlipperChange = (event) => {
    setSlippers(event.target.value);
    setSlipperCount((currentState) => {
      return currentState + 1;
    });
  };
  const handleTeaChange = (event) => {
    setTea(event.target.value);
    setTeaCount((currentState) => {
      return currentState + 1;
    });
  };
  const handleBookChange = (event) => {
    setBook(event.target.value);
    // bookValue && setBook((currentState) => [...currentState, bookValue]);
    // setBookValue('');
  };

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
      <div>
        <label>Add book here</label>
        <input style={{ height: '30px' }} value={bookValue} onChange={handleBookChange} />
        {/* <ul>
          {book.map((event) => {
            return <li key={event}>{event}</li>;
          })}
        </ul> */}
      </div>
      <p>You have changed your pajamas {pajamaCount} times, your slippers {slipperCount} times, and
      your tea {teaCount} times.</p>
    </div>
  );
}
