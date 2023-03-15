import { Mail, Home, Box } from "react-feather";

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "secondPage",
    title: "Second Page",
    icon: <Mail size={20} />,
    navLink: "/second-page",
  },
  {
    id: "WithoutMenu",
    title: "WithoutMenu",
    icon: <Box size={20} />,
    navLink: "/WithoutMenu",
  },
];
