import generated from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
    pageExtensions: ['ts', 'tsx', 'mdx'],
};

const withMDX = generated();
module.exports = withMDX(nextConfig);
