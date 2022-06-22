import './Header.scss';

// Import use selector to give us access to our store
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';

const Header = () => {

  // Get our authentication state from redux
  const authenticated = useSelector(state => state.auth.isAuthenticated);

  // Create a function sunce useDispatch is a hook and can't be called in an event handler
  const dispatch = useDispatch();

  // logout handler in order to log our account out
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch( authActions.logout() );
  }

  return (
    <header className="header">
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            { authenticated && <button onClick={logoutHandler}>Logout</button> }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
