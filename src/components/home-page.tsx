import '../sass/home-page.scss'
import AboutMe from './AboutMe';
import ColorChanger from './ColorChanger';
import MyLanguages from './MyLanguages';
import MyLinks from './MyLinks';
import Resume from './Resume';

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
                <ColorChanger />
            </div>
            <Resume />
            <AboutMe />
            <MyLanguages />
            <MyLinks />
        </div>
    )
}