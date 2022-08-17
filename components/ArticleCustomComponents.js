/* eslint-disable jsx-a11y/heading-has-content */
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

/** Render <h6> */
export const renderHeadingType6 = ({ node, ...props }) => (
  <h6
    style={{
      fontWeight: 500,
      letterSpacing: "0.19em",
      lineHeight: "25px",
      fontSize: 12,
      textTransform: "uppercase",
      opacity: 0.8,
    }}
    {...props}
  />
);

/** Render <p> */
export const renderParagraph = ({ node, ...props }) => (
  <p
    className="content"
    style={{
      paddingBottom: "2em",
      fontSize: "0.9em",
    }}
    {...props}
  />
);
