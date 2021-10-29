import React from 'react';
import './Home.css';

import WorldMap from '../WorldMap/WorldMap';
import Selection from '../Selection/Selection.js';

function Home(props) {

  const [data, setData] = React.useState(null);
  let illness = props.illness;

  React.useEffect(() => {
    fetch(`/api/${illness}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(() => setData({error: 'Could not load an API response.'}));
  }, [illness]);
  if(data == null || data.error) {
    return (
      <div className="container">
        <Selection data={data} setState={setData} />
        <p>Loading...</p>
      </div>
    )
  } else {
    return (
      <div className="container">
        <Selection data={data} setState={setData} />
        <WorldMap />
        <p>Cases: {!data.cases.overall ? "Loading..." : data.cases.overall}</p>
        <p>Recovered: {!data.recovered.overall ? "Loading..." : data.recovered.overall}</p>
        <p>Deaths: {!data.deaths.overall ? "Loading..." : data.deaths.overall}</p>
        <p>Last Updated: {!data.lastUpdated ? "Loading..." : data.lastUpdated}</p>
      </div>
    )
  }
}

export default Home;