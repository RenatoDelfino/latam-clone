/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AMADEUS_API_SECRET: process.env.AMADEUS_API_SECRET,
    AMADEUS_API_KEY: process.env.AMADEUS_API_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    SKY_API_KEY: process.env.SKY_API_KEY,
    SKY_API_HOST: process.env.SKY_API_HOST,
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
  },
};

export default nextConfig;
