export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const pageview = (url) => {
  window.gtag("config", GTM_ID, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
