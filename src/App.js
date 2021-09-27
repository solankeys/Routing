import { Route,Switch } from 'react-router-dom';
import Error from './pages/Error';
import Signuppage from './pages/signuppage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true}>
          <Signuppage />
        </Route>
        <Route path='/error'>
          < Error />
        </Route>
        </Switch>
      </div>
  );
}

export default App;
