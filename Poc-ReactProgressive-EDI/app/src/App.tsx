import { Helmet, HelmetProvider } from 'react-helmet-async';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Privacy } from './features/Privacy';
import { CardLogList } from './features/CardLog';

const App = (): JSX.Element => {
  return (
    <HelmetProvider>
      <div className="app">
        <Helmet titleTemplate="%s | Code of Frankenstein">
          <title>Dotnet-React</title>
        </Helmet>
        <Router basename="/app">
          <Switch>
            <Route path="/log">
              <CardLogList />
            </Route>
            <Route path="/the-monster">
              <div>
                <h1>the-monster</h1>
                <p>este código está em react (:</p>
              </div>
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
          </Switch>
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default hot(App);
