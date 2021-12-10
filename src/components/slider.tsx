import { SliderData } from "./sliderData";
import './slider.scss'
import { AiOutlineArrowDown } from "react-icons/ai";

export function slider() {
    for (const item of SliderData) {

        console.log(item);

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