export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We are very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "We constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Js library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "School & College ERP System",
    des: "A comprehensive ERP solution designed to streamline academic and administrative operations for schools and colleges. It includes features like attendance management, online exams, student and teacher portals, assignment handling, event management, and real-time notifications, ensuring seamless communication and efficiency.",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQFBDvUKBRvTTQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689327559936?e=2147483647&v=beta&t=_EDhL_I2IEfFf0OCzZen8WsOoOVqkCe9PwO6nAwpeUE",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://campus-nexus.nexisparkx.com",
  },
  {
    id: 2,
    title: "Vishwakarma - Coaching Institute Platform",
    des: "A modern and intuitive website designed to streamline student enrollment, showcase Institute, and about the Institute.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://edu-elite.com"
},
{
  id: 3,
  title: "FitPro Hub - Smart Diet & Fitness Platform",
  des: "A personalized fitness platform that suggests proper diet plans based on BMI calculations, helping users achieve their health goals.",
  img: "/p3o.png",
  iconLists: ["/re.svg", "/tail.svg", "/s.svg", "/next.svg", "/bmi.svg"],
  link: "/"
},
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote: 
      "Working with nexisparkx and his team was a fantastic experience. They built a sleek and highly functional fitness website for my business, and I couldn't be happier with the results. Their attention to detail, responsiveness, and dedication to excellence made the entire process smooth and efficient. Highly recommended!",
    name: "Abhishek Tomer",
    title: "student"
  },  
  {
    quote: 
      "nexisaprkx team did an outstanding job developing our old car parts e-commerce website. They understood our vision and delivered a seamless, user-friendly platform that has significantly improved our online presence. Their expertise, professionalism, and commitment to quality truly set them apart. Highly recommended!",
    name: "Anas",
    title: "Founder of Classic Auto Parts Hub"
  },  
  {
    quote: 
      "nexisaprkx team created a beautiful and calming meditation website tailored to my personal needs. The design is serene, the functionality is seamless, and the overall experience has truly enhanced my meditation practice. Their dedication and expertise made the process effortless. Highly recommended!",
    name: "Piyush",
    title: "Meditation Enthusiast"
  },
  
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer ",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
