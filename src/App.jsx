import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Header from './components/UI/Header';
import Home from './components/pages/Home';
import Checkout from './components/pages/Checkout'



function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App
