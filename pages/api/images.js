import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export default async function GET(req) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  const isSection = searchParams.get("section");
  const font = fetch(
    new URL("../../public/fonts/KaiseiTokumin-B-Min.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: "url(https://mayur.wtf/images/post.jpg)",
        }}
      >
        <div
          style={{
            marginLeft: 140,
            marginRight: 190,
            display: "flex",
            fontSize: isSection ? 165 : 130,
            fontFamily: "Kaisei Tokumin",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Kaisei Tokumin",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
