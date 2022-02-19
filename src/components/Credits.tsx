import { useState } from "react";
import '../sass/credits.scss'

const Credits = () => {

    const [hidden, setHidden] = useState(true);


    const isHidden = hidden ? {
        display: 'none'
    } : {
        display: 'inline'
    }


    return (
        <div className="credits" style={
            hidden ? {
                bottom: '3em',
                left: '1em',
                height: 'fit-content',
                padding: '0.5em',
                transform: 'scale(0.7)'
            } : {
                bottom: '10em',
                left: '50%',
                transform: 'translateX(-50%)'
            }
        }>
            {hidden ? <button onClick={() => setHidden(!hidden)} className="info-button"></button> : <button onClick={() => setHidden(!hidden)} className="close-button"></button>}
            <h4 style={isHidden}>© 2022 Zansuken</h4>
        </div>
    );
}

export default Credits