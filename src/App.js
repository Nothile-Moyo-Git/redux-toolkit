import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import './styles/App.scss';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {

  // Getting our isAuthenticated value from react-redux
  const authenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="backdrop">
      <Header/>
      { authenticated ? <UserProfile/> : <Auth/> }
      <Counter />
    </div>
  );
}

export default App;
