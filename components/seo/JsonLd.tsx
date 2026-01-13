import React from 'react';

export function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NebulaStack",
        "url": "https://nebulastack.in",
        "logo": "https://nebulastack.in/logo.png",
        "description": "Premium web development agency specializing in high-converting websites and lead generation machines.",
        "foundingDate": "2024",
        "founders": [
            {
                "@type": "Person",
                "name": "NebulaStack Team"
            }
        ],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "Karnataka",
            "addressLocality": "Bangalore"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "Customer Service",
            "availableLanguage": "English",
            "contactOption": "TollFree"
        },
        "sameAs": [
            "https://twitter.com/nebulastack_in",
            "https://linkedin.com/company/nebulastack",
            "https://facebook.com/nebulastack",
            "https://instagram.com/nebulastack_in"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "High-Converting Website Development",
                        "description": "Custom websites optimized for lead generation and conversions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "UI/UX Design",
                        "description": "User-centered design that drives engagement and conversions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SEO Optimization",
                        "description": "Search engine optimization for maximum visibility"
                    }
                }
            ]
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "NebulaStack",
        "url": "https://nebulastack.in",
        "description": "Premium web development agency specializing in high-converting websites",
        "publisher": {
            "@type": "Organization",
            "name": "NebulaStack"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://nebulastack.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://nebulastack.in/#organization",
        "name": "NebulaStack",
        "url": "https://nebulastack.in",
        "logo": "https://nebulastack.in/logo.png",
        "description": "Leading web development agency in Bangalore, India specializing in conversion-optimized websites",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "560001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "12.9716",
            "longitude": "77.5946"
        },
        "telephone": "+91-XXXXXXXXXX",
        "email": "hello@nebulastack.in",
        "openingHours": "Mo-Fr 09:00-18:00",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "currenciesAccepted": "INR",
        "areaServed": [
            {
                "@type": "Country",
                "name": "India"
            },
            {
                "@type": "State",
                "name": "Karnataka"
            }
        ],
        "serviceType": ["Web Development", "UI/UX Design", "Digital Marketing"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Website Development",
                        "description": "Custom website development with modern technologies"
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "50000",
                        "priceCurrency": "INR"
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://nebulastack.in"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </>
    );
}