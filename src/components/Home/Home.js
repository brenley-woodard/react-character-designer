import React, { useState } from 'react';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';

export default function Home() {
  const [pajamas, setPajamas] = useState('black');
  const [slippers, setSlippers] = useState('checkered');
  const [tea, setTea] = useState('bedtime');
  const [book, setBook] = useState('');

  return (
    <div>
      <Controls {...{ pajamas, setPajamas, slippers, setSlippers, tea, setTea, book, setBook }}/>
      <Display {...{ pajamas, setPajamas, slippers, setSlippers, tea, setTea, book, setBook }}/>
    </div>
  );
}