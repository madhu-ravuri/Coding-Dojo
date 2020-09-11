import React, { useState } from 'react';

import './App.css';

function App() {

  const tabs = [
    { label: "Tab1", content: "Tab 1 content here"},
    { label: "Tab2", content: "Tab 2 content here"},
    { label: "Tab3", content: "Tab 3 content here"},
  ];

  const[selectedTab, setSelectedTab] = useState(0);

  const tabStyles = {
    border: "1px solid black",
    width: 500,
    padding: 15,
    margin: "auto",
    marginTop: 10,
    fontFamily: "Tahoma",
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center"}}>
        {tabs.map((tab, i) => {
          const h2Styles = {
            border: "1px solid black",
            padding: "10px 51px",
            margin: "50px 10px 0 10px",
            fontFamily: "Tahoma",
          };

          if (i === selectedTab) {
            h2Styles.backgroundColor = "#2E4057";
            h2Styles.color = "white";
          }
          
          return(
          <h2 key={i} style={h2Styles} onClick={ (e) => { setSelectedTab(i) }}>
            {tab.label}
            </h2>
        );
      })}
      </div>
      <div style={tabStyles}>
        <h2>{tabs[selectedTab].content}</h2>
      </div>
    </div>
  );
}

export default App;
