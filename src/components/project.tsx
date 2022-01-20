import '../sass/project.scss'
import { SliderData } from './sliderData'
import { GrFormClose } from 'react-icons/gr'
import { FC } from 'react'

export const ProjectView: FC<{ index: number, onClick: () => void }> = (props) => {

        return (

                <div className='projectView'>

                        <button onClick={() => props.onClick()}><GrFormClose /></button>
                        <iframe src={SliderData[props.index].url} frameBorder="0" title={SliderData[props.index].name}></iframe>
                        <a style={{ display: "table-cell" }} href={SliderData[props.index].url} target="_blank" rel="noopener noreferrer"> Open in a new tab</a>
                </div>

        )

}
