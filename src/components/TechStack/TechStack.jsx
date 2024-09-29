import ParallaxText from "./Parallax";
import c from "../../assets/Backend/c.svg";
import python from "../../assets/Backend/python.svg";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import { SiSpringboot,SiTailwindcss } from "react-icons/si";

export default function TechStack() {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <h1 className="my-10 text-center text-4xl">
        Technologies powering my projects
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
      
        <ParallaxText baseVelocity={-5}>
          <div className=" p-4 flex flex-col items-center">
            {/* <h2 className="text-xl font-bold">Backend Technologies</h2> */}
            <div className="flex items-center gap-10">
              {/* <h2 className="text-4xl  font-bold">Back end</h2> */}

              <FaJava className="java-icon" size={100} color="orange" />
              <SiSpringboot className="java-icon" size={140} color="#69AE3D" />
              <img src={python} />
              <FaNodeJs className="java-icon" size={140} color="#407E37" />
              <img src={c} />
            </div>
          </div>
        </ParallaxText>

       
        <ParallaxText baseVelocity={5}>
          <div className=" p-4 flex flex-col items-center">
          
            <div className="flex items-center gap-10">
              {/* <h2 className="text-4xl  font-bold">Front - End</h2> */}
              <FaReact className="java-icon" size={100} color="#00D8FF" />
              <FaHtml5 className="java-icon" size={100} color="#E44D27" />
              <FaCss3Alt className="java-icon" size={100} color="#264DE3" />{" "}
              <FaJs className="java-icon" size={100} color="#EFD81A" />
              <SiTailwindcss size={100} color="#36B6F0"/>
            </div>
          </div>
        </ParallaxText>
      </div>
    </div>
  );
}
