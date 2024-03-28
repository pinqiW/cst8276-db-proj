import React from 'react';
import './App.css';
import MapComponent from "./MapComponent";
import TechDescripComponent from "./TechDescripComponent";

function App() {
  return (
    <div className="App">
        <div>
            CST 8276 Project <br/>
            <p>How best to store GPS locations for use with Google Map APIs - using Oracle</p>
        </div>
        <TechDescripComponent/>
      <MapComponent/>

    </div>
  );
}

export default App;
