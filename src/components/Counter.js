import './Counter.scss';

// Import use selector to give us access to our store
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  // Use selector creates our subscription for us by using react-redux. We retreive the state slice counter
  const counter = useSelector(state => state.counter);

  // Create our dispatch reference so we can call it on our buttons
  const dispatch = useDispatch(); 

  const toggleCounterHandler = () => {};

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      <div className="value">{`Counter: ${counter}`}</div>
      <div className="counter__buttons">
        <button onClick={ () => dispatch({type: 'increment'}) }>Increment</button>
        <button onClick={ () => dispatch({type: 'decrement'}) }>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
