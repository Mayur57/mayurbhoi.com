/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */

/** Render <li> */
export const renderListItem = ({ node, ...props }) => (
  <li style={{ fontSize: 14, opacity: 0.75 }} {...props} />
);

/** Render <ul> */
export const renderUnorderedList = ({ node, ...props }) => (
  <ul style={{ paddingLeft: 18 }} {...props} />
);

/** Render <blockquote> */
export const renderQuotes = ({ node, ...props }) => (
  <blockquote
    style={{ fontStyle: "italic", fontSize: 26, opacity: 0.4 }}
    {...props}
  />
);

/** Render <a> */
export const renderHyperlinks = ({ node, ...props }) => (
  <a className="article-link" {...props} />
);

//   color: mode("purple.400", "red.400")(props),
//   transition: "all 250ms ease",
//   _hover: {
//     opacity: 0.6,
//   },
