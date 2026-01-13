import React from 'react';
import Head from 'next/head';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'product';
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
    structuredData?: object;
    noindex?: boolean;
    article?: {
        publishedTime?: string;
        modifiedTime?: string;
        author?: string;
        section?: string;
        tags?: string[];
    };
    product?: {
        price?: string;
        currency?: string;
        availability?: string;
        brand?: string;
    };
}

export function SEOHead({
    title,
    description,
    keywords = [],
    canonical,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    structuredData,
    noindex = false,
    article,
    product,
}: SEOProps) {
    const siteTitle = 'NebulaStack | Premium Web Development Agency';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    const metaDescription = description || 'Transform your business with NebulaStack\'s conversion-optimized websites. We build lead generation machines that turn visitors into customers. Get a free consultation today!';

    const defaultKeywords = [
        'web development agency India',
        'high converting websites',
        'lead generation websites',
        'web design company',
        'UI/UX design agency',
        'conversion optimization',
        'digital marketing agency',
        'website development services',
        'ecommerce website design',
        'SEO optimized websites',
        'mobile responsive design',
        'web development Bangalore',
        'startup website design',
        'business website development',
        'landing page optimization'
    ];

    const allKeywords = [...defaultKeywords, ...keywords].join(', ');

    const canonicalUrl = canonical || 'https://nebulastack.in';
    const ogImageUrl = ogImage || 'https://nebulastack.in/og-image.jpg';

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={allKeywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots Meta */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            )}

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title || siteTitle} />
            <meta property="og:site_name" content="NebulaStack" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImageUrl} />
            <meta name="twitter:image:alt" content={title || siteTitle} />
            <meta name="twitter:site" content="@nebulastack_in" />
            <meta name="twitter:creator" content="@nebulastack_in" />

            {/* Article Specific Meta Tags */}
            {article && (
                <>
                    {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
                    {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
                    {article.author && <meta property="article:author" content={article.author} />}
                    {article.section && <meta property="article:section" content={article.section} />}
                    {article.tags && article.tags.map(tag => (
                        <meta key={tag} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Product Specific Meta Tags */}
            {product && (
                <>
                    {product.price && <meta property="product:price:amount" content={product.price} />}
                    {product.currency && <meta property="product:price:currency" content={product.currency} />}
                    {product.availability && <meta property="product:availability" content={product.availability} />}
                    {product.brand && <meta property="product:brand" content={product.brand} />}
                </>
            )}

            {/* Additional SEO Meta Tags */}
            <meta name="author" content="NebulaStack" />
            <meta name="publisher" content="NebulaStack" />
            <meta name="language" content="en-US" />
            <meta name="geo.region" content="IN-KA" />
            <meta name="geo.placename" content="Bangalore" />
            <meta name="geo.position" content="12.9716;77.5946" />
            <meta name="ICBM" content="12.9716, 77.5946" />

            {/* Business Specific Meta Tags */}
            <meta name="business:contact_data:street_address" content="Your Street Address" />
            <meta name="business:contact_data:locality" content="Bangalore" />
            <meta name="business:contact_data:region" content="Karnataka" />
            <meta name="business:contact_data:postal_code" content="560001" />
            <meta name="business:contact_data:country_name" content="India" />
            <meta name="business:contact_data:email" content="hello@nebulastack.in" />
            <meta name="business:contact_data:phone_number" content="+91-XXXXXXXXXX" />

            {/* Structured Data */}
            {structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            )}

            {/* Preconnect for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

            {/* Favicon and App Icons */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/icon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/manifest.json" />
        </Head>
    );
}