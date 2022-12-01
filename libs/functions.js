export const calculateAnimationDelay = (index) =>
  Math.round((index + 1) / 2) / 10;

export const getCMSBaseUrl = () => {
  const environmentMode = process.env.NEXT_PUBLIC_ENV;
  return environmentMode === "dev"
    ? "http://localhost:1337/api"
    : "https://mosaic-cms-handler.fly.dev/api";
};
