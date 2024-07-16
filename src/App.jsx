import React, { useState } from 'react';
import Background from './components/Background/Background';

const App = () => {
  const heroData = [
    { text1: "Dive into", text2: "What you Love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give into", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(2); 
  const [PlayStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background PlayStatus={PlayStatus} heroCount={heroCount} />
    </div>
  );
};


export default App;