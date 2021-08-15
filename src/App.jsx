import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import Book from './components/Book/Book';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/book" component={Book} />
      <Route path="*" render={() => <div>Page not found. Error 404.</div>} />
    </Switch>
  </BrowserRouter>
);

export default App;
