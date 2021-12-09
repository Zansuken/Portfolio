import logo from './logo.svg';
import './App.scss';
import { slider } from './components/slider';
import { buildHomePage } from './components/home-page';

function App() {
  return (
    <div className="App">
      <main>
        {buildHomePage()}
      </main>
      <footer className="app_footer">
        {slider()}
      </footer>
    </div>
  );
}

export default App;
