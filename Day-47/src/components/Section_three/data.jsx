import { TbLayoutDashboardFilled } from "react-icons/tb";
import { HiFingerPrint } from "react-icons/hi2";
import { IoMdPricetags } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";

const data = {
  head: {
    content: "my skills",
    titleh2: "What I do",
    describe:
      "I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling. Discover below how I can help you.",
  },
  list: [
    {
      icon: <TbLayoutDashboardFilled />,
      title: "Frontend Web Development",
      desc: "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
    },
    {
      icon: <HiFingerPrint />,
      title: "Mobile App Development",
      desc: "I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
    },
    {
      icon: <IoMdPricetags />,
      title: "Technology Stack",
      desc: "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
    },
    {
      icon: <FaHashtag />,
      title: "Web Optimization",
      desc: "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
    },
    {
      icon: <FaEye />,
      title: "User-Centric Design",
      desc: "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
    },
    {
      icon: <IoNewspaperSharp />,
      title: "Testing and Quality Assurance",
      desc: "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
    },
  ],
};

export default data;
