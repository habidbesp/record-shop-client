import './sass/App.scss';
import { useContext } from 'react'
import { UserContext } from './context/UserContext';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Shop from './Components/Shop';
import LandingPage from './Components/LandingPage';


function App() {
  const { records } = useContext(UserContext)
  console.log(useContext(UserContext));

  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/shop' component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
