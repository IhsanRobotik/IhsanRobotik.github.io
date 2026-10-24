import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
  SiTailwindcss, SiGit, SiNodedotjs, SiVite, SiFigma,
  SiKicad,
  SiPython,
  SiArduino,
  SiLinux,
} from "react-icons/si";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram } from "react-icons/fi";
import type { IconType } from "react-icons";
import SolidWorksIcon from "@/components/icons/SolidWorksIcon";
import OnshapeIcon from "@/components/icons/Onshape";

/**
 * Edit this file to personalize the template.
 * No other files need to change for basic content updates.
 */

export const site = {
  name: "Ihsan Fadilah",
  role: "Robotics Engineer",
  bio: "I design, build, and program robotic systems, bringing mechanical, electronic, and software components together.",
  email: "ihsanfadilah980@gmail.com",
  location: "Central Java, Indonesia",
  cvUrl: "/ihsan fadilah cv.pdf",
};

export const socials = [
  { name: "GitHub", href: "https://github.com/IhsanRobotik", Icon: FiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ihsanfadilah2/", Icon: FiLinkedin },
  { name: "Instagram", href: "https://www.instagram.com/ihsanfdl7/", Icon: FiInstagram },
  { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ihsanfadilah980@gmail.com", Icon: FiMail },
];

export const about = {
  paragraphs: [
    "I'm a robotics engineer interested in the complete build process: turning an idea into a mechanical design, wiring and integrating electronics, and writing the software that makes a machine move.",
    "My projects bring together CAD, embedded systems, and code. I document the design decisions and tests along the way so each build is easy to understand, reproduce, and improve.",
  ],
};

export type Project = {
  title: string;
  category?: string;
  description: string;
  tags: string[];
  /** Local MP4/WebM file path, for example /videos/mobile-robot.mp4. */
  video?: string;
  poster?: string;
  links: { label: string; href: string; type: "video" | "design" | "docs" | "code" | "demo" }[];
};

export const projects: Project[] = [
  {
    title: "Mobile Robot Platform",
    category: "Robotics · Mechanical + Embedded",
    description: "lorem ipsum kontol.",
    tags: ["CAD", "Embedded C++", "Motor control"],
    video: "https://www.youtube.com/embed/PzbiDPRk3jw",
    links: [
      { label: "Build video", href: "https://github.com/IhsanRobotik", type: "video" },
      { label: "CAD design", href: "https://github.com/IhsanRobotik", type: "design" },
      { label: "Code", href: "https://github.com/IhsanRobotik", type: "code" },
    ],
  },
  {
    title: "Robotic Arm & Gripper",
    category: "Robotics · Mechanism + Control",
    description: "hehe.",
    tags: ["SolidWorks", "Kinematics", "Arduino"],
    video: "",
    links: [
      { label: "Demo video", href: "https://github.com/IhsanRobotik", type: "video" },
      { label: "Design files", href: "https://github.com/IhsanRobotik", type: "design" },
      { label: "Project notes", href: "https://github.com/IhsanRobotik", type: "docs" },
    ],
  },
  {
    title: "Embedded Control System",
    category: "Embedded · Firmware + Electronics",
    description: "mom.",
    tags: ["KiCad", "Python", "Linux"],
    video: "",
    links: [
      { label: "Documentation", href: "https://github.com/IhsanRobotik", type: "docs" },
      { label: "Source code", href: "https://github.com/IhsanRobotik", type: "code" },
      { label: "Test video", href: "https://github.com/IhsanRobotik", type: "video" },
    ],
  },
];

export type Skill = { name: string; Icon: IconType };

export const skills: Skill[] = [
  { name: "KiCad", Icon: SiKicad },
  { name: "Python", Icon: SiPython },
  { name: "Arduino", Icon: SiArduino },
  { name: "Linux", Icon: SiLinux },
  { name: "SolidWorks", Icon: SolidWorksIcon },
  { name: "Onshape", Icon: OnshapeIcon },
  { name: "Git", Icon: SiGit },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
