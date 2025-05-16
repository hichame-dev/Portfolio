import HeroBanner from "../components/home/HeroBanner";
import About from "../components/home/About";
import TechCarousel from "../common/TechCarousel";
import useSnapToCarousels from "../hooks/useSnapToCarousels";


function Home() {
    useSnapToCarousels(); // 🧲 active le snap sur le carrousel
    return (
        <>
            <HeroBanner />
            <TechCarousel />
            <About />
        </>
    );
}

export default Home;
