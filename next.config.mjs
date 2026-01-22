/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "www.transparenttextures.com",
            },
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/avif', 'image/webp'],
    },

    webpack: (config, { isServer }) => {
        // Undici komplett ausschließen - es wird nur serverseitig benötigt
        config.resolve.alias = {
            ...config.resolve.alias,
            'undici': false,
        };

        // Falls noch Probleme: undici als external behandeln
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                net: false,
                tls: false,
            };
        }

        return config;
    },

    // Alle Firebase-Module transpilen
    transpilePackages: [
        "firebase",
        "@firebase/app",
        "@firebase/auth",
        "@firebase/firestore",
        "@firebase/util",
        "@firebase/component",
        "@firebase/logger",
    ],

    // Experimentelle Flags für bessere Kompatibilität
    experimental: {
        serverComponentsExternalPackages: ['undici'],
    },
};

export default nextConfig;
