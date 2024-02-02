import { CiGrid42 } from "react-icons/ci";
import { GoProjectRoadmap } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
//social links
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

interface Link {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface SocialLink {
  name: string;
  icon: JSX.Element;
}

const links: Link[] = [
  { name: 'Home', href: '/', icon: <CiGrid42 size={20} /> },
  { name: 'Projects', href: '/projects', icon: <GoProjectRoadmap size={20} /> },
  { name: 'About Me', href: '/aboutMe', icon: <FaUser size={19} />  },
  { name: 'Contact', href: '/contact', icon: <IoMailOutline size={20} /> },
];

const socialLinks: SocialLink[] = [
  { name: 'X', icon: <FaXTwitter size={18} /> },
  { name: 'Github', icon:  <FaGithub size={24}/> },
];

export { links, socialLinks };