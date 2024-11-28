/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '/raeditio/raeditio/main/public/',
            },
        ],
    },
};

export default nextConfig;
