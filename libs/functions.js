export const calculateAnimationDelay = (index) =>
  Math.round((index + 1) / 2) / 10;

export const getCMSBaseUrl = () => {
  const environmentMode = process.env.NEXT_PUBLIC_ENV;
  console.log(environmentMode);
  return environmentMode !== "dev"
    ? "https://mosaic-cms-backend.herokuapp.com/api"
    : "http://localhost:1337/api";
};
