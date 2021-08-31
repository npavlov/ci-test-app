import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {Header} from "./components/header";
import {About} from "./pages/about";
import {Footer} from "./components/footer";
import {Home} from "./pages/home";
import {Other} from "./pages/other";

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
            <Route path="/other" component={Other}/>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
