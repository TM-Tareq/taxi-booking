import { MdWorkspacePremium } from "react-icons/md";
import { FaUsersCog, FaHandshake } from "react-icons/fa";

const aboutSections = [
  {
    title: "Proven Experience",
    icon: <MdWorkspacePremium className="text-blue-600 text-2xl" />,
    content:
      "With years of hands-on work in the industry, we've helped clients succeed through scalable, secure, and smart solutions tailored to their unique needs.",
  },
  {
    title: "Specialized Team",
    icon: <FaUsersCog className="text-blue-600 text-2xl" />,
    content:
      "Our team is composed of passionate developers, designers, and strategists who are experts in their respective fields.",
  },
  {
    title: "Lasting Partnerships",
    icon: <FaHandshake className="text-blue-600 text-2xl" />,
    content:
      "We build strong, long-term relationships with clients to ensure mutual growth and shared success.",
  },
];

export default aboutSections;
