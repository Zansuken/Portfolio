import logo from './logo.svg';
import './App.scss';
import { slider } from './components/slider';

function App() {
  return (
    <div className="App">
      <footer className="app_footer">
        {slider()}
      </footer>
    </div>
  );
}

export default App;
