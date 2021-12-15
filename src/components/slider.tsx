import { SliderData } from "./sliderData";
import '../sass/slider.scss'
import { AiOutlineArrowDown } from "react-icons/ai";
import { projectUrl } from "./project";

export function Slider() {
    
    for (const item of SliderData) {
        return (
            <div className="project_thumbnails">
                <div className="my_projects">
                    <h2>Click on any project</h2>
                    <AiOutlineArrowDown />
                </div>
                {SliderData.map((slide, index) => {
                    return (
                        <div className="project_thumbnail" key={index} >
                            <div>
                                <img src={slide.thumbnail} alt={slide.name} onClick={() => projectUrl
                                } />
                                <span>{slide.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}