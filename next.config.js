/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Image optimization with SEO benefits
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Advanced SEO optimizations
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Performance optimizations
  experimental: {
    scrollRestoration: true,
  },

  // Enhanced security headers for SEO trust signals
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
      // Specific headers for SEO-critical files
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // Compression for faster loading
  compress: true,

  // Build optimization
  output: "standalone",

  // Redirects for SEO (add any needed redirects)
  async redirects() {
    return [
      // Redirect non-www to www for consistent SEO
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Rewrites for SEO-friendly URLs (if needed)
  async rewrites() {
    return [
      // Add any URL rewrites for SEO purposes
    ];
  },

  // PWA support (optional)
  // headers: async () => [...],
};

module.exports = nextConfig;
