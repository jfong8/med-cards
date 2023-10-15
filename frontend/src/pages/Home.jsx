import React, { useState } from 'react';
import CardGrid from '../components/CardGrid';

function Home() {
  const [cardsData, setCardsData] = useState(undefined);
  const [clicked, setClicked] = useState(false);

  async function getCardsData() {
    const response = await fetch('http://localhost:4000/api/cards');
    if (response.status === 200) {
      const json = await response.json();
      setCardsData(json);
    }
  }

  async function handleButtonClick() {
    if (!clicked) {
      setClicked(true);
      getCardsData();
    } else {
      setClicked(false);
      setCardsData(null);
    }
  }

  return (
    <div className="home">
      <h2>Hello Team 109!</h2>
      <button type="button" onClick={handleButtonClick}>
        {!clicked ? <p>Call API</p> : <p>Clear Data</p>}
      </button>
      { cardsData && (
        <CardGrid
          cardData={cardsData.cards}
        />
      )}
    </div>
  );
}

export default Home;
