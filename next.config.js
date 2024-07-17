/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, option) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "microapp-1",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./microapp1": "./pages/index.tsx",
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
