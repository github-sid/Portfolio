import bitmoji from "../../assets/bitmoji.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About Me 
      </h1>
      <div className=" flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="  flex items-start justify-center"
          >
            <img className="rounded-2xl " src={bitmoji} alt="siddharth" />
          </motion.div>
        </div>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              Over the last 9 years, I’ve honed my skills in technologies like
              Java, Spring Boot, C, JavaScript, React, Node.js, Express, and
              DataBase Management. I bring 3 years of professional experience
              from LTIMindTree (formerly LTI), where I developed software
              solutions and web applications. My problem-solving approach is
              rooted in logic, which makes coding an integral part of my daily
              work. Alongside my tech expertise, I’ve cultivated a business
              acumen through a finance course in my master’s program, giving me
              a broader perspective on how technology impacts business. I’m
              passionate about learning, constantly picking up new skills, and
              applying them to real-world challenges. I particularly enjoy
              solving DSA problems and have a strong interest in gaming,
              history, politics, and a variety of eclectic topics. I’m open to
              collaborate on innovative projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
