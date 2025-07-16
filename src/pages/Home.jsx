import SEO from "../common/SEO"; 
import HeroBanner from "../components/home/HeroBanner";
import About from "../components/home/About";
import TechCarousel from "../common/TechCarousel";

function Home() {
    return (
        <>
            <SEO 
                title="Hichame Dev | Développeur Front-End"
                description="Portfolio de Hichame Dev, développeur front-end passionné par la qualité, la performance et l'expérience utilisateur."
            />
            <HeroBanner />
            <TechCarousel />
            <About />
        </>
    );
}

export default Home;
