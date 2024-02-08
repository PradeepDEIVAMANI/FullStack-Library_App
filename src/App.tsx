import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/NavbarAndFooter/Homepage/ExploreTopBooks'; 
import { Carousel } from './layouts/NavbarAndFooter/Homepage/Carousel';

function App() {
  return(
    <div>
    <Navbar/>
    <ExploreTopBooks/>
    <Carousel/>
    </div>
  );
 
}
export default App;
