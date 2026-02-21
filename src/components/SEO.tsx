import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title,
    description,
    keywords = "web development, app development, software agency, react development, AI solutions, SaaS development",
    image = "/og-image.png",
    url = "https://sscodehub.web.app/"
}: SEOProps) => {
    const siteTitle = `${title} | SSCODEHUB`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{siteTitle}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

            {/* Open Graph tags */}
            <meta property='og:title' content={siteTitle} />
            <meta property='og:description' content={description} />
            <meta property='og:url' content={url} />
            <meta property='og:image' content={image} />
            <meta property='og:type' content='website' />

            {/* Twitter Card tags */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={siteTitle} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={image} />
        </Helmet>
    );
};

export default SEO;
