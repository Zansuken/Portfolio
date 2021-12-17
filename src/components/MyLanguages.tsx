import { useState } from "react"
import { FaCode } from "react-icons/fa"
import '../sass/MyLanguages.scss'

export function MyLanguages() {

    const [visibility, setVisibility] = useState(true)

    function hideSection() {
        visibility? setVisibility(false):setVisibility(true)
    }
    return (
        <div className={visibility?'languages':'languages-hidden'}>
            <span className='section_label' onClick={() => {
                    hideSection()
                }}><FaCode/></span>
                <h2>Languages</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SASS (Just starting it atm!)</li>
                    <li>JavaScript</li>
                    <li>TypeScript (Just starting it atm!)</li>
                </ul>
                <h2>Frameworks</h2>
                <ul>
                    <li>React (Just starting it atm!)</li>
                </ul>
            </div>
    )
}

export default MyLanguages