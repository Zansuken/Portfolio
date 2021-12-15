import '../sass/home-page.scss'
import AboutMe from './AboutMe';
import MyLanguages from './MyLanguages';
import MyLinks from './MyLinks';

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
            <AboutMe />
            <MyLanguages />
            <MyLinks />
        </div>
    )
}