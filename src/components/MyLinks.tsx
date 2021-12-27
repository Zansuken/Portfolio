import { useState } from "react"
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import '../sass/MyLinks.scss'

export function MyLinks() {

    const [visibility, setVisibility] = useState(true)

    function hideSection() {
        visibility? setVisibility(false):setVisibility(true)
    }
    return (
        <div className={visibility?'links-hidden':'links'}>
                <h2>Links</h2>
                <ul>
                    <li><a href="https://github.com/Zansuken"><FaGithubSquare fill='#79FE0C' /></a></li>
                    <li><a href="https://www.linkedin.com/in/sébastien-doom-212639222/"><FaLinkedin fill='#79FE0C' /></a></li>
                    <li><a href="https://twitter.com/doom_sebastien"><FaTwitterSquare fill='#79FE0C' /></a></li>
                    <li><a href="https://www.instagram.com/zansuken/"><FaInstagramSquare fill='#79FE0C' /></a></li>
                </ul>
                <span className='section_label' onClick={() => {
                    hideSection()
                }}>LINKS</span>
            </div>
    )
}

export default MyLinks