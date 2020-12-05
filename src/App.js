import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import {Launch} from './Components/Launch'
import { LaunchIndex } from "./Components/LaunchIndex";
import {ProductDetail} from './Components/ProductDetail';
import {NotFound} from './Components/NotFound'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="launch" element={<Launch />}>
            <Route path="/" element={<LaunchIndex />}></Route>
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
