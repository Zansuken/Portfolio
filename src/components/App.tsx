import '../sass/App.scss';
import { Slider } from './slider';
import { HomePage } from './home-page';
import { ProjectView } from './project';

function App() {
  return (
    <div className="App">
      <main>
        <HomePage />
        {ProjectView()}
      </main>
      <Slider />
    </div>
  );
}

export default App;
