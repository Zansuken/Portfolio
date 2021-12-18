import { useState } from "react"
import '../sass/Resume.scss';

export default function Resume() {

    const [visibility, setVisibility] = useState(true)

    function hideSection() {
        visibility? setVisibility(false):setVisibility(true)
    }

    return (
        <section className={visibility?'resume':'resume-hidden'}>
            <span className='section_label' onClick={() => {
                hideSection()
            }}>RESUME</span>
            <h2>Resume</h2>
            <h3>Experiences</h3>
            <ul>
                <li><div><h4>Dealer at <a href="https://casinodespa.be">Casino de Spa</a></h4><legend>From **** to ****</legend></div></li>
            </ul>
            <h3>Soft skills</h3>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <h3>Hard skills</h3>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
    )
}