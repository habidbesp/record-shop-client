import './sass/App.scss';
import { useContext } from 'react'
import { UserContext, UserContextProvider } from './context/UserContext';

function App() {
  const { records } = useContext(UserContext)

  return (
    <div className="App">
      <h1>React record store</h1>
    </div>
  );
}

export default App;
