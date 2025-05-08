import React, { useState } from 'react';
import Sectionone from './Components/Sectionone';
import Sectiontwo from './Components/Sectiontwo';
import Sectionthree from './Components/Sectionthree';
import './App.css';
import Syncbutton from './Components/Syncbutton';
import Menubtn from './Components/Menubtn';
import Nav from './Components/Nav';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <>
      <div className="navigation">
        <Nav onSearch={handleSearch} />
      </div>
      <div className="container">
        <div className="section-header">
          <div className="section-header-title">CNAPP Dashboard</div>
          <div className="section-header-menus">
            <Syncbutton />
            <Menubtn />
          </div>
        </div>
        <div className="layout sectionone">
          <Sectionone searchTerm={searchTerm} />
        </div>
        <div className="layout sectiontwo">
          <Sectiontwo searchTerm={searchTerm} />
        </div>
        <div className="layout sectionthree">
          <Sectionthree searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
};

export default App;