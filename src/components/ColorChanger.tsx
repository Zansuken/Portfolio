import { FC } from 'react'
import '../sass/ColorChanger.scss'
import layoutColorButtons from './LayoutColors'

const ColorChanger :FC <{onClick: (index: number) => void}> = (props) => {

    return(
        <div className="colors-changer">{layoutColorButtons.map((color, index) => {
            return (
                    <button className={color.color + '-button'} key={index}
                    onClick={() => {props.onClick(index)
                    console.log(props);
                    }}></button>
            )
        })}</div>
        
    )

}

export default ColorChanger