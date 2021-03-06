import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Mission from './components/Mission/Mission';
import Footer from './components/Footer/Footer';
import Task from './components/Task/Task';
import singBird from './components/Task/Playback';
import Choice from './components/Mission/Choice';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Navbar></Navbar>
     <Task></Task>
     <Mission></Mission>
     <Footer></Footer>
    </div>
  );
}
window.onload = () => {
  singBird();
  Choice();
}

export default App;
