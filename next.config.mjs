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
        ],
    },
transpilePackages: ["undici", "firebase", "@firebase/auth"],
};

export default nextConfig;
