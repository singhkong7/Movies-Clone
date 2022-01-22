import React from "react";
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import MovieDetail from "./MovieDetail/MovieDetail";
import Error from "./PageNotFound/Error";
import Footer from "./Footer/Footer";
import HeaderSection from "./Header/HeaderSection";
import Home from "./Home/Home";
function App() {
  return (
    <div className="App">
       <Router>
        <HeaderSection></HeaderSection>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route component={Error}/>
          </Switch>
        </div>
        <Footer/>
       </Router>
    </div>
  );
}

export default App;
