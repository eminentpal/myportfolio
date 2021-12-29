//import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import RingLoader from "react-spinners/RingLoader";

import { useState } from "react";

import { useEffect } from "react";
import About from "./components/About";


const Home = lazy(()=> import("./components/Home"));

// const About = lazy(()=> import("./components/About"));

function App() {

  const [loading, setLoading] = useState(true)

 
useEffect(()  =>{
  setLoading(true);
  setTimeout(() =>{
    setLoading(false);
  }, 8000);
}, []);

  return (
    <Router>
      <div className="App">
    <Switch>
      <Route exact path="/" >
      <Suspense fallback={ <div  className="loading"> <RingLoader  loading={loading} color="black" size={80}  /></div>}>
      <Home  />
      </Suspense>
     
      </Route>

     {/* <Route exact path="/about/:id" >
     <Suspense fallback={ <div  className="aboutapp"> <RingLoader loading={loading} loading color="blue" size={60}  /></div>}>
      <About  />
      </Suspense>
     </Route> */}
    </Switch> 
    </div>
    </Router>
    
  );
}

export default App;
