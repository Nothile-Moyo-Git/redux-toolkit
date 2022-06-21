import './Counter.scss';
import { counterActions } from '../store/index';

// Import use selector to give us access to our store
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  // Use selector creates our subscription for us by using react-redux. We retreive the state slice counter
  const counter = useSelector(state => state.counter);

  // Create our dispatch reference so we can call it on our buttons
  const dispatch = useDispatch(); 

  // Functional handlers
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase({amount: 10}));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease({amount: 10}));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };


  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      {counter.showCounter && <div className="value">{`Counter: ${counter.counter}`}</div>}
      <div className="counter__buttons">
        <button onClick={ incrementHandler }>Increment</button>
        <button onClick={ increaseHandler }>Increase by 10</button>
        <button onClick={ decrementHandler }>Decrement</button>
        <button onClick={ decreaseHandler }>Decrease by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
