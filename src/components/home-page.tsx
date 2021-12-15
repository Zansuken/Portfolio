import '../sass/home-page.scss'
import { FaGithubSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaCode } from 'react-icons/fa';

export function HomePage() {
    return (
        <div className="home_layout">
            <div className="home_header">
                <h1>
                    Welcome to Zansuken's Website.
                </h1>
                <h3>
                    Created with React, Typescript and SASS...
                </h3>
            </div>
            <div className='about_section'>
                <h2>About me</h2>
                <p>
                    My name is Sébastien Doom, front end trainee web developper coming from Belgium and living in France.<br />
                    I started coding seriously in 2021, I am currently following a web dev formation from OpenClassrooms.
                </p>
                <span className='section_label'>ABOUT</span>
            </div>
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
            <div className="links">
                <h2>Links</h2>
                <ul>
                    <li><a href="https://github.com/Zansuken"><FaGithubSquare fill='#79FE0C' /></a></li>
                    <li><a href="https://www.linkedin.com/in/sébastien-doom-212639222/"><FaLinkedin fill='#79FE0C' /></a></li>
                    <li><a href="https://twitter.com/doom_sebastien"><FaTwitterSquare fill='#79FE0C' /></a></li>
                    <li><a href="https://www.instagram.com/zansuken/"><FaInstagramSquare fill='#79FE0C' /></a></li>
                </ul>
                <span className='section_label'>LINKS</span>
            </div>
        </div>
    )
}