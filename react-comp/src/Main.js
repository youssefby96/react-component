import React from 'react';
import './App.css';
import ProfilPhoto from './profil/ProfilPhoto.js';
import FullName from './profil/FullName.js'; 
import Address from './profil/Address.js';

function Main() {
  return (
    <div className="App">
      <Address />
      <FullName />
      <ProfilPhoto />

    </div>
  );
}

export default Main;
