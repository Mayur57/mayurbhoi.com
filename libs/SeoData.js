const twitter = {
  handle: "@mayurbhoii",
  cardType: "summary_large_image",
};

const openGraph = {
  type: "website",
  locale: "en_IN",
  url: "https://www.mayur.wtf/",
  title: "Mayur Bhoi",
  description: "Developer, designer, creator.",
  images: [
    {
      url: "https://www.mayur.wtf/images/main.jpeg",
      width: 1920,
      height: 1080,
      alt: "Og Image Alt",
      type: "image/jpeg",
    },
  ],
};

const titleTemplate = "%s – Mayur Bhoi";
const defaultTitle = "Mayur Bhoi";
const description = "Developer, designer, creator.";

export const seoData = {
  titleTemplate,
  defaultTitle,
  description,
  openGraph,
  twitter,
};
