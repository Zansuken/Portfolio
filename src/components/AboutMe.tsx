import { useState } from "react"
import '../sass/AboutMe.scss'

export function AboutMe() {

    const [visibility, setVisibility] = useState(true)

    function hideSection() {
        visibility? setVisibility(false):setVisibility(true)
    }

    return (
        <div className={visibility?'about_section-hidden':'about_section'}>
                <h2>About me</h2>
                <p>
                    My name is Sébastien Doom, front end trainee web developper coming from Belgium and living in France.<br />
                    I started coding seriously in 2021, I am currently following a web dev formation from OpenClassrooms.
                </p>
                <span className='section_label' onClick={() => {
                    hideSection()
                }}>ABOUT</span>
            </div>
    )
}

export default AboutMe