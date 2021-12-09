import './home-page.scss'
import { FaGithubSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';

export function buildHomePage() {
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
            </div>
            <div className='languages'>
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
                    <li><a href="https://github.com/Zansuken"><FaGithubSquare fill='#79FE0C'/></a></li>
                    <li><a href="https://www.linkedin.com/in/sébastien-doom-212639222/"><FaLinkedin fill='#79FE0C'/></a></li>
                    <li><a href="https://twitter.com/doom_sebastien"><FaTwitterSquare fill='#79FE0C'/></a></li>
                    <li><a href="https://www.instagram.com/zansuken/"><FaInstagramSquare fill='#79FE0C'/></a></li>
                </ul>
            </div>
            <div className="my_projects">
                <h2>Click on any project</h2>
                <AiOutlineArrowDown />
            </div>
        </div>
    )
}