/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { CommandMenu, CommandWrapper, useCommands } from "kmenu";
import { useRouter } from "next/router";
import React from "react";
import {
  FiCode,
  FiGithub,
  FiSearch,
  FiHome,
  FiInfo,
  FiPaperclip,
  FiLinkedin,
  FiMail,
  FiStar,
  FiCopy,
  FiTwitter,
} from "react-icons/fi";

const Palette = () => {
  const router = useRouter();
  const main = [
    {
      category: "Navigation",
      commands: [
        {
          icon: <FiHome />,
          text: "Home",
          perform: () => router.push("/"),
        },
        {
          icon: <FiInfo />,
          text: "About",
          perform: () => router.push("/about"),
        },
        {
          icon: <FiCode />,
          text: "Projects",
          perform: () => router.push("/projects"),
        },
        {
          icon: <FiPaperclip />,
          text: "Articles",
          perform: () => router.push("/posts"),
        },
        {
          icon: <FiSearch />,
          text: "Resumé",
          perform: () => router.push("/resume.pdf"),
          newTab: true,
        },
      ],
    },
    {
      category: "Connect",
      commands: [
        {
          icon: <FiTwitter />,
          text: "Twitter",
          keywords: "twitter",
          shortcuts: { keys: ["t"] },
          href: "https://twitter.com/mayurbhoii",
          newTab: true,
        },
        {
          icon: <FiGithub />,
          text: "Github",
          keywords: "GitHub",
          shortcuts: { keys: ["g", "h"] },
          href: "https://github.com/mayur57",
          newTab: true,
        },
        {
          icon: <FiLinkedin />,
          text: "LinkedIn",
          keywords: "Linkedin",
          shortcuts: { keys: ["l"] },
          href: "https://linkedin.com/in/mayur-bhoi",
          newTab: true,
        },
        {
          icon: <FiMail />,
          text: "Email",
          keywords: "Email",
          shortcuts: { keys: ["e"] },
          href: "mailto:mayur072000%40gmail%2Ecom",
          newTab: true,
        },
      ],
    },
    {
      category: "Miscellaneous",
      commands: [
        {
          icon: <FiInfo />,
          text: "About Website",
          keywords: "star",
          perform: () => router.push("/meta"),
        },
        {
          icon: <FiStar />,
          text: "Star on Github",
          keywords: "star",
          href: "https://github.com/mayur57/mosaic",
          newTab: true,
        },
        {
          icon: <FiCopy />,
          text: "Copy Current URL",
          keywords: "copy",
          perform: () => navigator.clipboard.writeText(window.location.href),
        },
      ],
    },
  ];

  const [mainCommands] = useCommands(main);
  
  return (
    <CommandWrapper>
      <CommandMenu
        commands={mainCommands}
        crumbs={["Home"]}
        index={1}
        placeholder="Search"
      />
    </CommandWrapper>
  );
};

export default Palette;
