import { keyframes } from "@emotion/react";

export const calculateAnimationDelay = (index) =>
  Math.round((index + 1) / 2) / 10;

export const getCMSBaseUrl = () => {
  const environmentMode = process.env.NEXT_PUBLIC_ENV;
  return environmentMode === "dev"
    ? "http://localhost:1337/api"
    : "https://mosaic-backend-handler.fly.dev/api";
};

export async function getFeaturedProject() {
  const response = await fetch(
    `${getCMSBaseUrl()}/projects?filters[featured][$eq]=true`
  ).then((res) => res.json());
  const { data } = response;
  return data[0];
}

export async function getLatestPost() {
  const response = await fetch(
    `${getCMSBaseUrl()}/posts?sort[0]=uploaded:desc&pagination[pageSize]=1`
  ).then((res) => res.json());
  const { data } = response;
  return data[0];
}

export const HueGlowAnimFrames = keyframes`
50% {
  background-position: 140% 50%;
  transform: skew(-2deg);
}`;
