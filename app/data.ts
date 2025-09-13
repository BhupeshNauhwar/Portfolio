export const personalInfo = {
  name: "Bhupesh Kumar",
  role: "Full-Stack Developer",
  tagline: "Building scalable applications with modern technologies",
  email: "bhupeshkumar052000@gmail.com",
  phone: "+91 8445072802",
  location: "Mathura, Uttar Pradesh",
  linkedin: "https://www.linkedin.com/in/bhupesh-kumar-809b05241/",
  github: "https://github.com/BhupeshNauhwar",
  about: "Aspiring Full-Stack Developer with hands-on experience in Java, Spring Boot, Angular, and the MERN stack. Skilled in developing scalable RESTful APIs and responsive, component-based user interfaces. Proficient with relational and NoSQL databases, Git, and debugging/testing for performance optimization. Passionate about clean code, problem-solving, and thriving in agile, collaborative environments."
};

export const skills = {
  "Programming Languages & Frameworks": [
    { name: "Java", icon: "☕", proficiency: 90 },
    { name: "JavaScript", icon: "🟨", proficiency: 85 },
    { name: "React JS", icon: "⚛️", proficiency: 85 },
    { name: "Angular JS", icon: "🅰️", proficiency: 80 },
    { name: "Node JS", icon: "🟢", proficiency: 80 },
    { name: "Spring Boot", icon: "🍃", proficiency: 85 },
    { name: "Express.js", icon: "🚀", proficiency: 75 },
    { name: "HTML", icon: "🌐", proficiency: 90 },
    { name: "CSS", icon: "🎨", proficiency: 85 },
    { name: "Bootstrap", icon: "🅱️", proficiency: 80 },
    { name: "Tailwind CSS", icon: "💨", proficiency: 85 }
  ],
  "Tools & Technologies": [
    { name: "MySQL", icon: "🐬", proficiency: 85 },
    { name: "MongoDB", icon: "🍃", proficiency: 80 },
    { name: "Redis", icon: "🔴", proficiency: 75 },
    { name: "Git", icon: "📝", proficiency: 85 },
    { name: "VS Code", icon: "💙", proficiency: 90 },
    { name: "Eclipse", icon: "🌙", proficiency: 80 },
    { name: "IntelliJ", icon: "🧠", proficiency: 80 },
    { name: "Postman", icon: "📮", proficiency: 85 },
    { name: "Swagger", icon: "📋", proficiency: 75 },
    { name: "Docker", icon: "🐳", proficiency: 70 },
    { name: "RabbitMQ", icon: "🐰", proficiency: 75 },
    { name: "JWT", icon: "🔐", proficiency: 80 },
    { name: "JUnit", icon: "✅", proficiency: 75 },
    { name: "Mockito", icon: "🎭", proficiency: 70 }
  ],
  "Coding Platforms": [
    { name: "LeetCode", icon: "🧩", proficiency: 85, achievement: "150+ Problems Solved" },
    { name: "GeeksforGeeks", icon: "🤓", proficiency: 80, achievement: "Active Contributor" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "GenAI Technology Migration Journey",
    description: "Revolutionary GenAI Agent Mode project demonstrating complete application development and cross-technology migrations using only AI prompts.",
    technologies: ["Java", "Spring Boot", "Angular", ".NET", "React", "Node.js"],
    features: [
      "100% GenAI Agent Mode Development - Zero manual coding",
      "Cross-technology migrations: Java→.NET→React+Node.js",
      "Monolith to microservices architecture evolution",
      "Premium motorcycle showroom management system",
      "Complete documentation of all GenAI prompts used"
    ],
    github: "https://github.com/BhupeshNauhwar/GenAI_Migrations",
    category: "GenAI Innovation"
  },
  {
    id: 2,
    title: "Hotel Management System",
    description: "Comprehensive hotel management system with booking, room management, and customer service features built using modern web technologies.",
    technologies: ["Java", "Spring Boot", "MySQL", "Angular", "JWT"],
    features: [
      "Room booking and reservation management",
      "Customer check-in/check-out system",
      "Payment processing and billing",
      "Staff management and role-based access",
      "Real-time availability tracking"
    ],
    github: "https://github.com/BhupeshNauhwar/Hotel_Management",
    category: "Full-Stack"
  },
  {
    id: 3,
    title: "Addressbook Management",
    description: "Full-stack address book app with responsive Angular frontend and Spring Boot REST APIs to manage contacts.",
    technologies: ["MySQL", "Spring Boot", "Angular", "Redis", "RabbitMQ"],
    features: [
      "JWT-based authentication with login, registration, and password reset",
      "Redis caching and RabbitMQ for asynchronous email notifications",
      "Clean architecture principles and modular code design",
      "CRUD operations with JPA and Hibernate",
      "Centralized exception handling and DTO validation"
    ],
    github: "https://github.com/BhupeshNauhwar/AddressBookApp",
    category: "Full-Stack"
  },
  {
    id: 4,
    title: "Weather App",
    description: "Responsive React weather app using OpenWeatherMap API to display real-time weather data.",
    technologies: ["ReactJS", "Tailwind CSS", "OpenWeatherMap API"],
    features: [
      "React Hooks for efficient state management",
      "Intuitive UI with dynamic icons and city-based search",
      "API error handling and loading states",
      "Responsive design for various screen sizes",
      "Deployed on Render for public access"
    ],
    github: "https://github.com/BhupeshNauhwar/weather-app",
    demo: "https://weather-app-2nxk.onrender.com/",
    category: "Frontend"
  },
  {
    id: 5,
    title: "E-Commerce Website",
    description: "Dynamic e-commerce website featuring session-based authentication and access control for users and admins.",
    technologies: ["Node.js", "Express", "MongoDB", "Handlebars"],
    features: [
      "Admin dashboard for product inventory management",
      "Cart management and order placement system",
      "Automated email notifications",
      "Server-side rendering with Handlebars",
      "Clean MVC architecture for scalable development",
      "Role-based access control for security"
    ],
    github: "https://github.com/BhupeshNauhwar/E-commerce",
    demo: "https://e-commerce-m8st.onrender.com/",
    category: "Full-Stack"
  },
  {
    id: 6,
    title: "Fitness Guide",
    description: "Comprehensive fitness application providing workout routines, exercise tracking, and health monitoring features.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Personalized workout plans and routines",
      "Exercise tracking and progress monitoring",
      "Health metrics and fitness goal setting",
      "Responsive design for mobile and desktop",
      "User authentication and profile management"
    ],
    github: "https://github.com/BhupeshNauhwar/fitness",
    category: "Full-Stack"
  }
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Capgemini",
    period: "June 2025 – Present",
    startDate: "2025-06-01"
  },
  {
    title: "Java Full-Stack Intern",
    company: "Capgemini",
    period: "Jan 2025 – May 2025",
    startDate: "2025-01-01"
  }
];

// Get current position for Hero section
export const getCurrentPosition = () => {
  return experience[0];
};

// Calculate total experience in months
export const calculateTotalExperience = () => {
  const startDate = new Date('2025-01-01');
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  return diffMonths;
};

export const certifications = [
  "Certified in Web Technologies – Coding Blocks",
  "Certified in Java Fundamentals – Infosys Springboard",
  "Completed AI with GitHub Copilot for Java Spring Boot Developers – Udemy",
  "Solved 150+ Problems on Leetcode"
];