import React, { useState } from 'react';

function App() {
  const [siteCount, setSiteCount] = useState(0);
  const [staffPerSite, setStaffPerSite] = useState(0);
  const [totalManpower, setTotalManpower] = useState(0);

  const calculateManpower = () => {
    setTotalManpower(siteCount * staffPerSite);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Manpower Calculator</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>Number of Sites: </label>
        <input
          type="number"
          value={siteCount}
          onChange={(e) => setSiteCount(Number(e.target.value))}
          placeholder="Enter number of sites"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Staff Per Site: </label>
        <input
          type="number"
          value={staffPerSite}
          onChange={(e) => setStaffPerSite(Number(e.target.value))}
          placeholder="Enter staff per site"
        />
      </div>
      <button onClick={calculateManpower} style={{ padding: '10px', margin: '10px' }}>
        Calculate Total Manpower
      </button>
      {totalManpower > 0 && <h2>Total Manpower Required: {totalManpower}</h2>}
    </div>
  );
}

export default App;