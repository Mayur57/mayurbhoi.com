import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { GridItemStyle } from "../grid/GridItemStyle";

const variants = {
  hidden: { opacity: 0, x: 0, y: 5 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 5 },
};

function Layout({ children, type, title, desc, slug }) {
  const img = `https://mayur.wtf/api/images?title=${title}`;
  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          type: "website",
          url: `https://mayur.wtf/${slug}`,
          images: [{ url: img }]
        }}
        twitter={{
          title,
          description: desc,
          cardType: "summary_large_image",
          handle: "@mayurbhoii",
        }}
      />
      <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.25, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <>
          {children}
          <GridItemStyle type={type} />
        </>
      </motion.article>
    </>
  );
}

export default Layout;
