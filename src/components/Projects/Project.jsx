import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import uberPic from "../../assets/Projects/uberPic.avif";

import nursingPic from "../../assets/Projects/nursing.avif";

import Cli from "../../assets/Projects/CLITool.avif";

import crypto from "../../assets/Projects/crypto.jpg";

import dashboard from "../../assets/Projects/dashboard.avif";

import handiTravel from "../../assets/Projects/handiTravel.jpg";
import ProjectButton from "./ProjectButton";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <TextParallaxContent
        imgUrl={uberPic}
        subheading="Ride-sharing App"
        heading="Uber Clone"
      >
        <ProjectContent
          description="The Uber Clone project is a comprehensive backend application built using the Spring Framework. The application includes RESTful Web Services, JWT Authentication, role-based access control, and Google OAuth for third-party login. PostgreSQL and Postgres GIS are used for data management, while Hibernate is integrated for ORM. With features such as Spring Data JPA, DTO patterns, and API documentation via Swagger, this project covers a range of modern backend development practices. CI/CD pipelines are set up using AWS CodePipeline, and extensive testing is implemented with JUnit and Mockito."
          projectLink="https://github.com/github-sid/UberClone"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={nursingPic}
        subheading="Streamlining Nursing Placements"
        heading="Nursing Student Placement Scheduler"
      >
        <ProjectContent
          description="The Nursing Student Placement Scheduler is a web application developed for the University of Windsor's Nursing Department as an internship project. Built on the MERN stack, this tool streamlines student placement management across different academic years, helping to organize schedules and optimize the allocation of clinical placements for nursing students."
          projectLink="https://test-nursing-sem4.netlify.app/login"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={Cli}
        subheading="Client Server"
        heading="CLI Tool "
      >
        <ProjectContent
          description="A command-line interface (CLI) tool using C, which performs several filesystem operations such as file search, archiving, and extracting specific files based on extensions or size. The code relies heavily on Unix-like system calls and utilities, such as tar, find, and directory traversal, to provide functionality."
          projectLink=" "
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={crypto}
        subheading="Insightful Crypto Management"
        heading="Cryptocurrency Dashboard"
      >
        <ProjectContent
          description="This project is a Cryptocurrency Dashboard built using Django, designed to provide users with real-time information on various cryptocurrency prices. The application features a simulated transaction system that allows users to engage in a mock buying experience, giving them insight into how cryptocurrency trading works without actual financial transactions."
          projectLink="https://github.com/github-sid/IADS_project"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={dashboard}
        subheading="Environmental Insights"
        heading="Eco-Dash"
      >
        <ProjectContent
          description="Eco-Dash is a comprehensive environmental analysis dashboard built on the MERN stack (MongoDB, Express.js, React, and Node.js). This application provides users with an interactive interface to monitor and analyze environmental data, helping them make informed decisions regarding sustainability practices."
          projectLink="https://github.com/github-sid/eco-dash"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={handiTravel}
        subheading="Travel Made Accessible"
        heading="HandiTravel"
      >
        <ProjectContent
          description="HandiTravel is a web application designed to empower and assist individuals with disabilities in exploring different travel destinations. Built on the MERN stack, this project aims to provide a comprehensive guide for handicapped travelers, enabling them to make informed decisions based on the services and facilities available at various locations."
          projectLink="https://github.com/github-sid/HandiTravelServer"
        />
      </TextParallaxContent>
    </div>
  );
}

const IMG_PADDING = 15;

// eslint-disable-next-line react/prop-types
const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[100vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-1 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

// eslint-disable-next-line react/prop-types
const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

// eslint-disable-next-line react/prop-types
const ProjectContent = ({ description, projectLink }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-2xl font-semibold md:col-span-4">
      Project Details
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-lg">{description}</p>
      <ProjectButton projectLink={projectLink} />
    </div>
  </div>
);
