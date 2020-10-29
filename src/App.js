import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";

const App = () => {
   return (
      <div>
         <Navigation />
         <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route path="/about">
               <About />
            </Route>
            <Route path="/contact">
               <Contact />
            </Route>
         </Switch>
      </div>
   );
};

export default App;
