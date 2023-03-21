import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import "bootswatch/dist/lux/bootstrap.min.css";
import {Navigation} from './components/Navbar';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
      <Routes>
        <Route exact path="/" element={<MessageList/>} />
        <Route exact path="/new-message" element={<MessageForm/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
