import Navbar from "./components/04-Templates/Navbar/Navbar.tsx";
import Profile from "./components/04-Templates/Profile/Profile.tsx";
import AboutMe from "./components/04-Templates/AboutMe/AboutMe.tsx";
import Education from "./components/04-Templates/Education/Education.tsx";
import Portfolio from "./components/04-Templates/Portfolio/Portfolio.tsx";
import Experience from "./components/04-Templates/Experience/Experience.tsx";

function App() {
    return (
        <>
            <header>
                <Navbar/>
                <Profile/>
                <AboutMe/>
                <Education/>
                <Experience/>
                <Portfolio/>
            </header>
        </>
    )
}

export default App
