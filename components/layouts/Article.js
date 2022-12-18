import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../grid/GridItemStyle";

const variants = {
  hidden: { opacity: 0, x: 0, y: 5 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 5 },
};

function Layout({ children, title, desc, img }) {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.25, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Mayur Bhoi</title>
            <meta charSet="utf-8" />
            <meta name="description" content={desc} />
            <meta name="author" content="Mayur Bhoi" />
            <meta property="og:image" content={img} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://mayurbhoi.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mayurbhoii" />
            <meta name="twitter:creator" content="@mayurbhoii" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={img} />
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  );
}

export default Layout;
