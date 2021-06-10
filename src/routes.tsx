import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Characters } from './pages/Characters';
import { HQs } from './pages/HQs';
import { Movies } from './pages/Movies';
import { SignIn } from './pages/SignIn';


function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/characters" exact component={Characters} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/hqs" exact component={HQs} />

      </Switch>
    </BrowserRouter>
    
  );
}

export default Routes;