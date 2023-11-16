/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        domains :['edamam-product-images.s3.amazonaws.com'],
        // remotePatterns: [
        //     {
        //       protocol: 'https',
        //       hostname: 'edamam-product-images.s3.amazonaws.com',
        //       port: '',
        //       pathname: '*/web-img/*/**', // Replace with the correct path pattern
        //     },
        //   ],
       
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
