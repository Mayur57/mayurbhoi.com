const config = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ["i.ibb.co", "via.placeholder.com"],
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")(config);

module.exports =
  process.env.ANALYZE === "true" ? withBundleAnalyzer({}) : config;
