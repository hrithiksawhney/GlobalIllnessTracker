import React from 'react';
import './Home.css';

function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data.error));
  }, []);
  return (
    <div class="container">
      <p>API Response: {!data ? "Loading..." : data}</p>
    </div>
  )
}

export default Home;