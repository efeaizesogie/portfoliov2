const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Satisfied Clients" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "NextJS Developer",
        imgPath: "/images/logos/next-js.png",
    },
    {
        name: "Angular Developer",
        imgPath: "/images/logos/angular.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Git",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Efeosa collaborated with us on several projects at Foxy Labs, consistently delivering work of exceptional quality and attention to detail. He met all his targets on time and demonstrated a strong sense of responsibility. His proactive approach made him a valuable contributor to our team.",
        imgPath: "/images/foxy-lab-exp.png",
        logoPath: "/images/foxy-lab-logo.png",
        title: "Frontend Developer",
        date: "August 2024 - February 2025",
        responsibilities: [
            "Transformed UI/UX designs into interactive React components.",
            "Built reusable, maintainable components adhering to best practices.",
            "Conducted rigorous testing and debugging for application stability.",
            "Utilized Git for efficient version control and collaboration.",
        ],
    },
    {
        review: "Efe brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/mercator-exp.png",
        logoPath: "/images/mercatorng_logo.png",
        title: "Frontend Web Developer",
        date: "November 2023 - June 2024",
        responsibilities: [
            "Took a lead role in the development and implementation of intricate frontend components to enhance usability and interactivity within fintech applications.",
            "Integrated complex backend functionalities seamlessly with frontend features to deliver comprehensive fintech platforms.",
            "Actively engaged in code reviews, performance optimizations, and continuous learning initiatives to enhance technical expertise and team collaboration.",
        ],
    },
    {
        review:
            "",
        imgPath: "/images/phreetech-logo.svg",
        logoPath: "/images/phreetech-logo.png",
        title: "Frontend Developer Intern",
        date: "June 2023 - September 2023",
        responsibilities: [
            "Mastered Angular, successfully delivering two robust projects in collaboration with peers.",
            "Gained proficiency in Jira, optimizing project workflows and team coordination.",
            "Collaborated with a team of interns to elevate branding and user experience.",
        ],
    },

];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Edoki Chukwuyem",
        mentions: "@chuksdev",
        review:
            "Working with Efeosa was a smart decision. He clearly understood our project goals and delivered a seamless website that met all our expectations. He’s very reliable and knows his craft well.",
        imgPath: "/images/user.png",
    },
    {
        name: "Kelechi Eronini",
        mentions: "@k_eronini",
        review:
            "As a teammate, Efeosa is reliable, sharp, and always ready to dive into challenges. He consistently delivers quality work, communicates clearly, and elevates any project he’s on. A real asset to the team!",
        imgPath: "/images/user.png",
    },
    {
        name: "Gifted Phreetech",
        mentions: "@gifted",
        review:
            "Working with Efeosa as a fellow intern was inspiring. He was always quick to solve problems, share knowledge, and push for clean, efficient code. His focus and energy made every team task smoother and more fun.",
        imgPath: "/images/user.png",
    },
    {
        name: "Mr Henry",
        mentions: "@honatrix",
        review:
            "It was a great experience working with Efeosa. He delivered a clean, user-friendly website that our customers find easy to navigate. He brings both technical skills and creative ideas to the table.",
        imgPath: "/images/user.png",
    },
    {
        name: "Godstime Nwabue",
        mentions: "@nwabuegodstime",
        review:
            "Efeosa is a very skilled web developer. He handled our site professionally, and since the launch, we’ve seen a clear improvement in performance and user experience. He’s definitely someone I recommend.",
        imgPath: "/images/user.png",
    },

];

const socialImgs = [
    // {
    //     name: "insta",
    //     url: "https://www.instagram.com/",
    //     imgPath: "/images/insta.png",
    // },
    // {
    //     name: "fb",
    //     url: "https://www.facebook.com/",
    //     imgPath: "/images/fb.png",
    // },
    {
        name: "x",
        url: "https://www.x.com/aizesogie",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/efe-aizesogie/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};