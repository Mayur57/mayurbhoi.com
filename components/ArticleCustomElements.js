/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */

import { useColorModeValue } from "@chakra-ui/react";
import parameterize from "parameterize";

/** Render <h2> */
export const renderHeadingType2 = ({ node, ...props }) => (
  <h2
    id={parameterize(node.children[0].value)}
    style={{
      letterSpacing: "-1px",
      fontSize: 24,
      color: useColorModeValue("#37352F", "#FFF"),
    }}
    {...props}
  />
);

/** Render <li> */
export const renderListItem = ({ node, ...props }) => (
  <li
    style={{ fontSize: 14, color: useColorModeValue("#37352F", "#BBB") }}
    {...props}
  />
);

/** Render <ul> */
export const renderUnorderedList = ({ node, ...props }) => (
  <ul
    style={{
      paddingLeft: 18,
      whiteSpace: "pre-line",
    }}
    {...props}
  />
);

/** Render <ol> */
export const renderOrderedList = ({ node, ...props }) => (
  <ol style={{ paddingLeft: 18, whiteSpace: "pre-line" }} {...props} />
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
      textDecoration: "underline",
      textUnderlineOffset: 5,
      textDecorationColor: useColorModeValue("#805AD599", "#FC8181"),
    }}
    {...props}
  />
);

/** Render <p> */
export const renderParagraph = ({ node, ...props }) => (
  <p
    className="content"
    style={{
      paddingTop: "0.8em",
      paddingBottom: "2em",
      fontSize: "0.9em",
    }}
    {...props}
  />
);
