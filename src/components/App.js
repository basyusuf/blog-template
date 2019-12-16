import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/flexiblegs-css.css';
import Header from './Header/Header';
import MainSlide from './MainSlide/MainSlide';
import Main from './Main/Main';

function App() {
  return (
    <div className="app">
      <Header />
      <MainSlide />
      <Main/>
    </div>
  );
}

export default App;
