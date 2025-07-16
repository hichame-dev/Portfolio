import React from "react";
import SEO from "../common/SEO";
import Contact from "../components/contact/Contact";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <SEO
                title="Contact | Hichame Dev"
                description="Contactez Hichame Dev pour discuter de vos projets web, besoins en développement front-end ou collaborations."
            />
            <Contact />
        </div>
    );
};

export default ContactPage;
