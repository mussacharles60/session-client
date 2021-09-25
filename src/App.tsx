import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

import Landing from './components/landing';
// import Login from './components/login';
import Home from './components/home';
import WindowFrame from './components/windowFrame';

function App() {
  return (
    <Router>
    <div className="router">
      <WindowFrame />
      <Switch>
        <Route exact path='/' render={({ history}) => <Landing history={history}/> } />
        {/* <Route path='/login' render={({ history}) => <Login history={history}/> } /> */}
        <Route path='/home' render={({ history}) => <Home history={history}/> } />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
