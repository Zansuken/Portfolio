import { SliderData } from "./sliderData";
import '../sass/slider.scss'
import { AiOutlineArrowDown } from "react-icons/ai";
import { FC } from "react";

export const Slider :FC <{onClick: (index: number) => void}> = (props) => {
    
    
        return (
            <div className="project_thumbnails app_footer">
                <div className="my_projects">
                    <h2>Click on any project</h2>
                    <AiOutlineArrowDown />
                </div>
                {SliderData.map((slide, index) => {
                    return (
                        <div className="project_thumbnail" key={index}>
                            <div onClick={() => props.onClick(index)}>
                                <img src={slide.thumbnail} alt={slide.name} />
                                <span>{slide.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
}