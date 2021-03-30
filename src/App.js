//import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import RingLoader from "react-spinners/RingLoader";
// import About from "./components/About";

const Home = lazy(()=> import("./components/Home"));

// const About = lazy(()=> import("./components/About"));

function App() {



 
  return (
    <Router>
      <div className="App">
    <Switch>
      <Route exact path="/" >
      <Suspense fallback={ <div  className="loading"> <RingLoader  loading color="blue" size={80}  /></div>}>
      <Home  />
      </Suspense>
     
      </Route>
     {/* <Route exact path="/about" >
     <Suspense fallback={ <div  className="aboutapp"> <RingLoader css={loadingStyle} loading color="blue" size={60}  /></div>}>
      <About  />
      </Suspense>
     </Route> */}
    </Switch> 
    </div>
    </Router>
    
  );
}

export default App;
