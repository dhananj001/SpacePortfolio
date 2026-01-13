'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}

function GoogleAnalyticsInner({ GA_ID }: { GA_ID?: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!GA_ID) return;

        // Initialize gtag if not already done
        if (!window.gtag) {
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag() {
                window.dataLayer.push(arguments);
            };

            window.gtag('js', new Date());
            window.gtag('config', GA_ID, {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: false, // We'll send manually
            });
        }
    }, [GA_ID]);

    // Track page views
    useEffect(() => {
        if (!GA_ID || !window.gtag) return;

        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

        window.gtag('config', GA_ID, {
            page_path: url,
            page_title: document.title,
        });

        // Track custom events for lead generation
        window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            custom_parameter_1: 'lead_generation_page',
        });

    }, [pathname, searchParams, GA_ID]);

    return null;
}

export function GoogleAnalytics({ GA_ID }: { GA_ID?: string }) {
    if (!GA_ID) return null;

    return (
        <Suspense fallback={null}>
            <GoogleAnalyticsInner GA_ID={GA_ID} />
        </Suspense>
    );
}

// Lead Generation Tracking Functions
export const trackLeadGeneration = {
    // Track when someone views contact form
    contactFormView: () => {
        if (window.gtag) {
            window.gtag('event', 'contact_form_view', {
                event_category: 'lead_generation',
                event_label: 'contact_form',
                value: 1,
            });
        }
    },

    // Track when someone submits contact form
    contactFormSubmit: (formData?: any) => {
        if (window.gtag) {
            window.gtag('event', 'contact_form_submit', {
                event_category: 'lead_generation',
                event_label: 'contact_form_submission',
                value: 1,
                custom_parameter_1: formData?.service || 'general_inquiry',
            });
        }
    },

    // Track button clicks that lead to conversions
    ctaClick: (buttonName: string, location: string) => {
        if (window.gtag) {
            window.gtag('event', 'cta_click', {
                event_category: 'lead_generation',
                event_label: buttonName,
                custom_parameter_1: location,
                value: 1,
            });
        }
    },

    // Track phone number clicks
    phoneClick: () => {
        if (window.gtag) {
            window.gtag('event', 'phone_click', {
                event_category: 'lead_generation',
                event_label: 'phone_number',
                value: 1,
            });
        }
    },

    // Track email clicks
    emailClick: () => {
        if (window.gtag) {
            window.gtag('event', 'email_click', {
                event_category: 'lead_generation',
                event_label: 'email_address',
                value: 1,
            });
        }
    },

    // Track service inquiries
    serviceInquiry: (serviceName: string) => {
        if (window.gtag) {
            window.gtag('event', 'service_inquiry', {
                event_category: 'lead_generation',
                event_label: serviceName,
                value: 1,
            });
        }
    },

    // Track portfolio views
    portfolioView: (projectName: string) => {
        if (window.gtag) {
            window.gtag('event', 'portfolio_view', {
                event_category: 'engagement',
                event_label: projectName,
                value: 1,
            });
        }
    },

    // Track time spent on page (for lead quality)
    timeOnPage: (timeSpent: number, pageType: string) => {
        if (window.gtag) {
            window.gtag('event', 'time_on_page', {
                event_category: 'engagement',
                event_label: pageType,
                value: timeSpent,
                custom_parameter_1: timeSpent > 60 ? 'high_engagement' : 'normal_engagement',
            });
        }
    },
};

export default GoogleAnalytics;