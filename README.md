# Portfolio Website v2
A modern, responsive, and interactive portfolio website built with **React**, **Vite**, and modern JavaScript libraries. This project was designed to showcase skills, experiences, and testimonials while providing a dynamic user experience with smooth animations and an engaging UI.
## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Components Overview](#components-overview)
7. [Environment Variables](#environment-variables)
8. [Contributing](#contributing)
9. [License](#license)

## Features
- **Responsive Design**: Optimized for all screen sizes, from mobile to desktops.
- **Smooth Animations**: Powered by `GSAP` and `@react-three/drei`.
- **Dynamic Contact Form**: Utilizes `EmailJS` for sending emails directly from the site.
- **Interactive User Experience**: Includes visually engaging animations and thematic components.
- **Dark & Theme Support for Notifications**: Integrates dark mode themes for notifications using `react-toastify`.
- Modular architecture for reusability and scalability.

## Technologies Used
The following technologies and libraries power this project:
1. **Frontend Framework**: [React](https://reactjs.org/) v19.0.0
2. **Bundler**: [Vite](https://vitejs.dev/) v6.2.0
3. **Styling**:
    - [TailwindCSS](https://tailwindcss.com/) v4.1.3

4. **Animations**:
    - [GSAP](https://greensock.com/gsap/) v3.12.7
    - [@react-three/drei](https://github.com/pmndrs/drei) for Three.js utilities.

5. **Form Handling**:
    - [EmailJS](https://www.emailjs.com/) for sending emails.

6. **Notifications**: [React Toastify](https://github.com/fkhadra/react-toastify) v11.0.5

## Installation
To get started with the project, ensure you have **Node.js** and **npm** installed on your machine.
1. Clone the repository:
``` bash
   git clone [repository URL]
```
1. Move into the project directory:
``` bash
   cd portfoliov2
```
1. Install dependencies:
``` bash
   npm install
```
1. Create a `.env` file in the root directory and add the necessary environment variables (see [Environment Variables](#environment-variables)).

## Usage
Run the project in development mode:
``` bash
npm run dev
```
To build the project for production:
``` bash
npm run build
```
Start the production server:
``` bash
npm run serve
```
The application will run locally at `http://localhost:3000` (or the port configured by Vite).
## Folder Structure
Here’s an overview of the project structure:
``` 
src/
├── assets/               # Static assets like images and icons
├── components/           # Reusable UI components (e.g., TitleCard, ContactExperience)
├── constants/            # Centralized constants and configuration
├── sections/             # Main sections of the portfolio (e.g., About, Skills, Contact)
├── App.jsx               # Root React component
├── main.jsx              # Entry point for React with Vite setup
├── index.css             # Global styles
├── env.d.ts              # Environment types for TypeScript
└── ...
```
## Components Overview
### Key Components
1. **TitleCard.jsx**:
    - Reusable UI component for rendering section titles and subtitles.

2. **Contact.jsx**:
    - Contains the contact form and integrates with EmailJS for message delivery.
    - Features form validation and feedback via React Toastify.

3. **ContactExperience.jsx**:
    - Highlights the user's experiences alongside the contact form, adding a personalized touch to the contact section.

4. **Skills.jsx**:
    - Displays the list of skills and technologies.

5. **Testimonials.jsx**:
    - Presents user/client testimonials to build credibility.

6. **Experience.jsx**:
    - Showcases professional experience in a visually rich and interactive manner.

## Environment Variables
The project requires the following environment variables to function correctly. Add them to a `.env` file in the root directory:
``` plaintext
VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```
These values can be obtained from the [EmailJS dashboard](https://dashboard.emailjs.com/).
## Contributing
We welcome contributions to this project! To get started:
1. Fork the repository.
2. Create a new branch:
``` bash
   git checkout -b feature/your-feature-name
```
1. Make your changes and commit them:
``` bash
   git commit -m "Add your message here"
```
1. Push to your fork:
``` bash
   git push origin feature/your-feature-name
```
1. Submit a pull request.

## Future Enhancements
- Add light/dark mode toggle support for the entire site.
- Integrate a blog or project showcase section.
- Improve accessibility features across the site.
- Optimize WebGL experience using Three.js for further improvements.

This README file provides a comprehensive overview of your project to help developers and collaborators understand its purpose and usage. It highlights the technologies, structure, and contribution guidelines effectively.
