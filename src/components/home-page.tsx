import '../sass/home-page.scss'
import AboutMe from './AboutMe';
import Credits from './Credits';
// import ColorChanger from './ColorChanger';
import MyLanguages from './MyLanguages';
import MyLinks from './MyLinks';
import Resume from './Resume';

export function HomePage() {

    // const [color, setColor] = useState(Number)

    // let actualColor = color

    return (
        <div className="home_layout" id='scroll-home'>
            <div className="home_header">
                <h1>
                    Welcome to Zansuken's Website.
                </h1>
                <h3>
                    Created with React, Typescript and SASS...
                </h3>
                {/* <ColorChanger onClick={(index) => {
                    setColor(index)
                    console.log(actualColor);
                    
                    }} /> */}
            </div>
            <Resume />
            <AboutMe />
            <MyLanguages />
            <MyLinks />
            <Credits />
        </div>
    )
}