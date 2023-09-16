import { useState } from 'react';

function Home() {
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);

  async function handleButtonClick() {
    if (!clicked) {
      setClicked(true);
      getData();
    } else {
      setClicked(false);
      setData(null);
    }
  };

  async function getData() {
    const response = await fetch('http://localhost:4000/api/cards');
    if (response.status === 200) {
      const json = await response.json();
      setData(json);
    }
  };

  return (
    <div className="home">
      <h2>Hello Home Component</h2>
      <button onClick={handleButtonClick}>
        {!clicked ? <p>Call API</p> : <p>Clear Data</p>}
      </button>
      { data && <p>{data.cards}</p>}
    </div>
  );
};

export default Home;
