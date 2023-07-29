import React from 'react';
import './App.css'
import Header from './components/Layout/Header/Header';
const App = () => {
  return (
    <main>
      <Header showInvite={true} showNotification={true} showProfile={true} showSearch={true}/>
    </main>
  );
};

export default App;
