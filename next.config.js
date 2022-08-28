module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ["i.ibb.co", "via.placeholder.com"],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|css|woff2|woff)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};
