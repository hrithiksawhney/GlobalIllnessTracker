import React from 'react';
import './Home.css';

function Home() {
  const [data, setData] = React.useState(null);
  let illness;
  if(!illness) illness = 'covid_19';

  React.useEffect(() => {
    fetch(`/api/${illness}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(() => setData({error: 'Could not load an API response.'}));
  }, [illness]);
  if(data == null || data.error) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    )
  } else {
    return (
      <div className="container">
        <p>Cases: {!data.cases.overall ? "Loading..." : data.cases.overall}</p>
        <p>Recovered: {!data.recovered.overall ? "Loading..." : data.recovered.overall}</p>
        <p>Deaths: {!data.deaths.overall ? "Loading..." : data.deaths.overall}</p>
      </div>
    )
  }
}

export default Home;