import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';

function Slider() {
  const [cardsData, setCardsData] = useState(undefined);

  async function getCardsData() {
    const response = await fetch('http://localhost:4000/api/cards');
    if (response.status === 200) {
      const json = await response.json();
      setCardsData(json);
    }
  }

  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <div className="App">
      <h1>Learning HomePage</h1>
      {cardsData && (
      <Carousel
        cardData={cardsData.cards}
      />
      )}
    </div>
  );
}
export default Slider;
