import './Auth.scss';
import { inputActions } from '../store/index'

// Import use selector to give us access to our store
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {

  // Get our state slice for our inputs we defined in our redux reducer
  const input = useSelector(state => state.input);

  // Grabbing out dispatch hook
  const dispatch = useDispatch(); 

  const updateEmailHandler = (event) => {
    event.preventDefault();
    dispatch(inputActions.updateEmail(event.target.value));
  }

  return (
    <main className="auth">
      <section>
        <form>
          <div className="control">
            <label htmlFor='email'>Email</label>
            <input 
              type='email' 
              id='email' 
              autoComplete='username' 
              onChange={updateEmailHandler}
              value={input.email}
              />
          </div>
          <div className="control">
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' autoComplete='current-password'/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
