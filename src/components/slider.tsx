import { SliderData } from "./sliderData";
import './slider.scss'

export function slider() {
    for (const item of SliderData) {
        
        console.log();
        
        return (
            <div className="project_thumbnails">
                {SliderData.map((slide, index) => {
                    return (
                        <div className="project_thumbnail">
                            <div>
                            <img src={slide.thumbnail} alt={slide.name} />
                            <span>{slide.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}