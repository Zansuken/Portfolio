import { FaCode } from "react-icons/fa"

export function MyLanguages() {
    return (
        <div className='languages'>
            <span className='section_label'><FaCode/></span>
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