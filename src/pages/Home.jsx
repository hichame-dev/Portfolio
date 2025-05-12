import HeroBanner from "../components/home/HeroBanner";
import About from "../components/home/About";
import TechCarousel from "../common/TechCarousel";

function Home() {
    return (
        <>
            <HeroBanner />
            <TechCarousel />
            <About />
        </>
    );
}

export default Home;
