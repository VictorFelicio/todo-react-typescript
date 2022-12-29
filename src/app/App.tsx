import React from 'react';

//assets
import './style/globalStyle.css';
import Logo from './assets/Logo.svg';
import SearchInput from './components/SearchInput';

//components

const App = () => {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo do to-do" />
      </header>
      <SearchInput />
    </>
  );
};

export default App;
