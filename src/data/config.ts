// working
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
  image?: { src: string; alt: string };
  links: { label: string; href: string; type: "video" | "design" | "docs" | "code" | "demo" }[];
};

export const projects: Project[] = [
  {
    title: "Automatic Bottle Unloader (Elkemelk)",
    category: "Robotics · Industrial Automation",
    description: "Fall 2024 team project for ElkeMelk. A robotic arm uses YOLOv8 to locate bottle caps and a custom gripper to lift bottles, flip them for cleaning, and place them on a conveyor. In testing, the system handled three bottles per minute and skipped missing bottles.",
    tags: ["Industrial robotics", "YOLOv8", "Gripper design"],
    video: "https://www.youtube.com/embed/PzbiDPRk3jw",
    links: [
      { label: "GitHub repository", href: "https://github.com/IhsanRobotik/ElkeMelk-Project", type: "code" },
      { label: "Demo video", href: "https://youtu.be/PzbiDPRk3jw", type: "video" },
    ],
  },
  {
    title: "MOSFET H-Bridge Motor Driver",
    description: "A compact KiCad PCB that uses four discrete MOSFETs to drive a brushed DC motor in either direction.",
    tags: ["KiCad", "PCB design", "Motor control"],
    image: {
      src: "/projects/mosfet-h-bridge.png",
      alt: "Isometric render of the motor driver PCB with four power MOSFETs",
    },
    links: [
      { label: "GitHub repository", href: "https://github.com/IhsanRobotik/Mosfet-dual-H-Bridge-Driver-", type: "code" },
      { label: "Schematic", href: "https://github.com/IhsanRobotik/Mosfet-dual-H-Bridge-Driver-/blob/main/Media/schematic.png", type: "design" },
    ],
  },
  {
    title: "Dobot M1 Vision-Guided Pick and Place",
    description: "A Python vision pipeline that detects objects with YOLO, maps their positions from the camera to robot coordinates, and sends them to a Dobot M1 for pick and place.",
    tags: ["Python", "YOLO", "Robot calibration"],
    image: {
      src: "/projects/dobot-pick-and-place.jpg",
      alt: "Dobot M1 robotic arm running a pick-and-place demonstration",
    },
    links: [
      { label: "GitHub repository", href: "https://github.com/IhsanRobotik/DobotM1_PickAndPlace", type: "code" },
      { label: "Demo video", href: "https://youtu.be/qJpISdlPttE", type: "video" },
    ],
  },
  {
    title: "3D-Printed Robot Arm",
    description: "A three-joint prototype with printed links, closed-loop PID control using magnetic encoders, and a ROS and MoveIt setup for motion planning.",
    tags: ["SolidWorks", "ROS", "MoveIt", "PID"],
    image: {
      src: "/projects/robot-arm.jpg",
      alt: "3D-printed robot arm on the workbench during a serial control test",
    },
    links: [
      { label: "GitHub repository", href: "https://github.com/IhsanRobotik/robotArm", type: "code" },
      { label: "Motion planning demo", href: "https://youtu.be/X_238GgZyBY", type: "video" },
    ],
  },
  {
    title: "PCB Milling Toolpath Generator",
    description: "A browser interface for pcb2gcode that converts Gerber and Excellon files into milling and drilling toolpaths, with a 3D preview of material removal.",
    tags: ["Python", "JavaScript", "CNC", "G-code"],
    image: {
      src: "/projects/pcb-milling.webp",
      alt: "Back-side PCB isolation milling paths plotted from the repository’s example G-code",
    },
    links: [
      { label: "GitHub repository", href: "https://github.com/IhsanRobotik/pcb2gcode-app", type: "code" },
      { label: "Setup guide", href: "https://github.com/IhsanRobotik/pcb2gcode-app#run", type: "docs" },
    ],
  },
  {
    title: "PID Line Follower Robot",
    description: "A KiCad controller board for a two-wheel line follower, with an ATmega32A, six optical sensor inputs, and separate H-bridge drivers for the left and right motors.",
    tags: ["KiCad", "AVR", "Optical sensing"],
    image: {
      src: "/projects/line-follower.png",
      alt: "Isometric CAD view of the two-wheel line follower robot",
    },
    links: [
      { label: "GitHub repository", href: "https://github.com/IhsanRobotik/Line-Follower-bot", type: "code" },
      { label: "PCB layout", href: "https://github.com/IhsanRobotik/Line-Follower-bot/blob/main/Media/Pcb%20layout.png", type: "design" },
    ],
  },
  {
    title: "E-Bike Battery and Speed Meter",
    description: "An STM32-based dashboard that reads battery voltage and a wheel-speed signal for a 16×2 LCD, with a custom PCB designed for CNC milling.",
    tags: ["STM32", "KiCad", "CNC milling"],
    image: {
      src: "/projects/ebike-meter.png",
      alt: "CAD render of the e-bike meter with its character LCD and controller board",
    },
    links: [
      { label: "GitHub repository", href: "https://github.com/IhsanRobotik/bike-lcd", type: "code" },
      { label: "Schematic", href: "https://github.com/IhsanRobotik/bike-lcd/blob/main/exports/schematic.pdf", type: "design" },
    ],
  },
  {
    title: "±15 V Linear Bench Power Supply",
    description: "A linear bench supply with a custom PCB and enclosure, separate adjustable positive and negative outputs, and a fixed 5 V rail.",
    tags: ["KiCad", "Analog electronics", "Enclosure design"],
    image: {
      src: "/projects/linear-power-supply.png",
      alt: "Isometric CAD render of the linear power supply enclosure and front panel",
    },
    links: [
      { label: "GitHub repository", href: "https://github.com/IhsanRobotik/-15-to-15-Linear-power-supply", type: "code" },
      { label: "Schematic", href: "https://github.com/IhsanRobotik/-15-to-15-Linear-power-supply/blob/main/media/Schenatic.png", type: "design" },
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
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
