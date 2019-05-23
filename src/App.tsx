import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <div>
        <Header username="leeeennyy" twitterUrl="https://twitter.com/leeeennyy" youtubeUrl="youtubeyo" emailAddress="myemailaddress" />
    </div>
  );
}

export default App;
