import { CiGrid42 } from "react-icons/ci";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
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
  href: string;
  icon: JSX.Element;
}

const links: Link[] = [
  { name: 'Home', href: '/', icon: <CiGrid42 size={20} /> },
  { name: 'Projects', href: '/projects', icon: <GoProjectRoadmap size={20} /> },
  { name: 'About Me', href: '/aboutMe', icon: <FaRegUser size={19} />  },
  { name: 'Contact', href: '/contact', icon: <IoMailOutline size={20} /> },
];

const socialLinks: SocialLink[] = [
  { name: 'X',href:'https://x.com/Thanisha23?t=X2xlsf3k4N10ZJ9A9j980g&s=09', icon: <FaXTwitter size={18} /> },
  { name: 'Github',href:'https://github.com/Thanisha23', icon:  <FaGithub size={24}/> },
];

export { links, socialLinks };