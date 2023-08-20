import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Aside from "./components/Aside";
import CiudadesShow from "./components/CiudadesShow";
import { CiudadesData } from "./components/Data";
import RiosShow from "./components/RiosShow";
import { RiosData } from "./components/Data";
import LagosShow from "./components/LagosShow";
import { LagosData } from "./components/Data";
import PlayasShow from "./components/PlayasShow";
import { PlayasData } from "./components/Data";
import VolcanesShow from "./components/VolcanesShow";
import {VolcanesData} from "./components/Data";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Aside />
        <Routes>
          <Route path="/" element={<CiudadesShow slides={CiudadesData}/>} />
          <Route path="/lagos" element={<LagosShow slides={LagosData}/>} />
          <Route path="/playas" element={<PlayasShow slides={PlayasData}/>} />
          <Route path="/rios" element={<RiosShow slides={RiosData}/>} />
          <Route path="/volcanes" element={<VolcanesShow slides={VolcanesData}/>} />
        </Routes>       
      </div>
    </BrowserRouter>
  );
}

export default App;
