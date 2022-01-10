import { useState } from "react"
import '../sass/Resume.scss';
import picture from '../assets/CV.png';

export default function Resume() {

    const [visibility, setVisibility] = useState(true)

    function hideSection() {
        visibility ? setVisibility(false) : setVisibility(true)
    }

    return (
        <section className={visibility ? 'resume-hidden' : 'resume'}>
            <span className='section_label' onClick={() => {
                hideSection()
            }}>RESUME</span>
            <img src={picture} alt="curriculum vitae" />
            {/* <h2>Resume</h2>
            <h3>Experiences</h3>
            <ul>
                <li><div><h4>Crew Team Member at <a href="https://www.restaurants.mcdonalds.fr/mcdonalds-saint-jean-d-angely">McDonald's Saint-Jean D'Angely</a><legend>From 2021 till now</legend></h4></div></li>
                <li><div><h4>Barman at <a href="https://www.greyhoundaldbury.co.uk">The Greyhound Inn Aldbury</a><legend>From 2020 to 2021</legend></h4></div></li>
                <li><div><h4>Manager at <a href="https://www.ukcasinochecker.com/palace-great-yarmouth-casino/">Palatial Leisure Great Yarmouth</a><legend>From 2019 to 2020</legend></h4></div></li>
                <li><div><h4>Manager at <a href="https://casinodespa.be">Casino de Spa</a><legend>From 2016 to 2019</legend></h4></div></li>
                <li><div><h4>Poker dealer at <a href="https://casinodespa.be">Casino de Spa</a><legend>From 2013 to 2016</legend></h4></div></li>
            </ul>
            <div className="skills-wrapper">
                <div className="skills-sections">
                    <h3>Soft skills</h3>
                    <ul>
                        <li>Teamwork</li>
                        <li>Curious</li>
                        <li>Flexible</li>
                        <li>Demanding</li>
                        <li>Taking Feedback</li>
                    </ul>
                    <h3>Hard skills</h3>
                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>Sass</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Figma</li>
                        <li>Notion</li>
                    </ul>
                </div>
                <img src={picture} alt="Sébastien Doom" />
            </div> */}

        </section>
    )
}