import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';

function Slider() {
  const [cardsData, setCardsData] = useState(undefined);

  async function getCardsData() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const response = await fetch('http://localhost:4000/api/cards', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
      {cardsData && (
      <Carousel
        cardData={cardsData.cards}
      />
      )}
    </div>
  );
}
export default Slider;
