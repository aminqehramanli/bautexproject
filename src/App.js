import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      
    );
  }
}

export default App;
