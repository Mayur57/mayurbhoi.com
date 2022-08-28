import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @import url('https://rsms.me/inter/inter.css');
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');
        `}
  />
);

export default Fonts;
