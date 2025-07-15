import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
    title,
    description,
    image = "/assets/optimized/profil.webp",
    url = "https://hichame-dev.netlify.app"
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
        </Helmet>
    );
};

export default SEO;
