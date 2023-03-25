import { Global } from "@emotion/react";

export const GridItemStyle = () => (
  <Global
    styles={`
      .item-thumbnail {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
      }
    `}
  />
);
