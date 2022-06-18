import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import './styles/App.scss';

function App() {

  

  return (
    <div className="backdrop">
      <Header/>
      <Auth/>
      <Counter />
    </div>
  );
}

export default App;
