
import SEO from "../common/SEO";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <SEO
                title="404 - Page non trouvée"
                description="La page que vous recherchez n'existe pas."
            />
            <section className="notfound-section">
                <div className="notfound-content">
                    <h1>404</h1>
                    <h2>Page non trouvée</h2>
                    <p>Oups... la page que vous recherchez n'existe pas ou a été déplacée.</p>
                    <Link to="/" className="home-btn">Revenir à l'accueil</Link>
                </div>
            </section>
        </>
    );
}

export default NotFound;
