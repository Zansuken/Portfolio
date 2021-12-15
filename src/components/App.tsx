import '../sass/App.scss';
import { Slider } from './slider';
import { HomePage } from './home-page';
import { ProjectView } from './project';
import { useState } from 'react';

function App() {

  const [view, setView] = useState<number | null>(null)

  return (
    <div className="App">
      <main>
        <HomePage />
        { view !== null && <ProjectView onClick={() => setView(null)} index={view} />}
      </main>
      <Slider onClick={(index) => setView(index)}/>
    </div>
  );
}

export default App;
