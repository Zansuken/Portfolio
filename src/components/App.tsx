import '../sass/App.scss';
import { Slider } from './slider';
import { HomePage } from './home-page';
import { ProjectView } from './project';
import { useState } from 'react';
import { SliderData } from './sliderData';

function App() {

  const [view, setView] = useState<number | null>(null)

  return (
    <div className="App">
      <main>
        <HomePage />
        { view !== null && <ProjectView onClick={() => setView(null)} index={view} />}
        <button className="mobile_button">Projects</button>
        {SliderData.map((slide, index) => {
                    return (
                        <div className="project_mobile_thumbnail" key={index}>
                            <div onClick={() => setView(index)}>
                                <img src={slide.thumbnail} alt={slide.name} />
                                <span>{slide.name}</span>
                            </div>
                        </div>
                    )
                })}
      </main>
      <Slider onClick={(index) => setView(index)}/>
    </div>
  );
}

export default App;
