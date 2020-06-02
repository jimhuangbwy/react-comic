import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import configureStore from './reducers/configureStore';
import Book from './components/book';
import Chapter from './components/chapter';

window.renderComic = function (divId, data) {
  const store = configureStore({
    root: {
      book: data.book,
      chapters: data.chapters,
      currChapter: 0, 
      currPage: 0, 
      currThumbnail: 0,
    }
  });

  render(
    <Provider store={store} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Book />
          </Route>
          <Route path="/chapter/:cidx" children={<Chapter />} />
        </Switch>
      </Router>
    </Provider>,
    document.querySelector('#' + divId)
  )
};
