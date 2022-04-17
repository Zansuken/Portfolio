import '../sass/App.scss';
import { Slider } from './slider';
import { HomePage } from './home-page';
import { ProjectView } from './project';
import { useState } from 'react';
import { SliderData } from './sliderData';
import Warning from './Warning';
import NewPortfolio from './NewPortfolio';

function App() {

  const [view, setView] = useState<number | null>(null)

  return (
    <div className="App">
      <Warning />
      <main>
        <NewPortfolio />
        <HomePage />
        {view !== null && <ProjectView onClick={() => setView(null)} index={view} />}
        <button className="mobile_button" onClick={() => window.scrollBy(0, window.innerHeight)}>Projects</button>
        {SliderData.map((slide, index) => {
          return (
            <div className="project_mobile_thumbnail" key={index}>
              <div onClick={() => {
                setView(index)
                window.scrollTo(0, 0)
              }}>
                <img src={slide.thumbnail} alt={slide.name} />
                <span>{slide.name}</span>
              </div>
            </div>
          )
        })}
      </main>
      <Slider onClick={(index) => setView(index)} />
    </div>
  );
}

export default App;
