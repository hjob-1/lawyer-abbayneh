import * as ImIcons from "react-icons/im";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
export const sideBarData = [
  {
    id: 1,
    icon: <AiIcons.AiOutlineDashboard />,
    Path: "/home",
    text: "Dashboard",
  },
  {
    id: 2,
    icon: <ImIcons.ImBlog />,
    Path: "/blog",
    text: "Blog",
  },
  {
    id: 3,
    icon: <AiIcons.AiOutlineUser />,
    Path: "/blogers",
    text: "Blogers",
  },
  {
    id: 4,
    icon: <MdIcons.MdOutlineLocalPostOffice />,
    Path: "/messages",
    text: "messages",
  },
  {
    id: 5,
    icon: <FaIcons.FaUserCog />,
    Path: "/profile",
    text: "Profile",
  },
];
