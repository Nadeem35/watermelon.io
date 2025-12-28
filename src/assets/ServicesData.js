// 1. Import the icons here
import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaMobileAlt,
} from "react-icons/fa";

// 2. Define and Export the array
export const ServicesData = [
  {
    title: "Web Development",
    description:
      "We create fast, responsive, and user-friendly websites tailored to your business needs.",
    icon: <FaLaptopCode size={30} />,
  },
  {
    title: "Graphic Design",
    description:
      "Eye-catching visuals that speak your brand's language. Our graphic design services.",
    icon: <FaPaintBrush size={30} />,
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your online presence with our strategic digital marketing services.",
    icon: <FaBullhorn size={30} />,
  },
  {
    title: "Mobile App Development",
    description:
      "Transform your ideas into functional, high-performance mobile apps.",
    icon: <FaMobileAlt size={30} />,
  },
];
