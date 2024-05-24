/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                hostname: "t.prcdn.co"
            }
        ]
    }
};

export default nextConfig;
