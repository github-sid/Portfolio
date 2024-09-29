import "./Hero.css";
import profilePic from "../../assets/p.png";
import HelloButton from "./HelloButton";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  return (
    <div className=" my-10 pb-11 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-5 text-6xl font-thin  lg:mt-16 lg:text-8xl"
            >
              Siddharth
            </motion.h1>

            {/* <span className=" bg-gradient-to-r from-blue-400 via-slate-500 to-grey bg-clip-text text-4xl tracking-tight text-transparent"> */}
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-custom-radial bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
              <span className="px-2 bg-custom-radial bg-clip-text">*</span>
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Hey, I{`'`}m Siddharth, a full stack developer based in Toronto. I
              love solving complex problems and creating efficient,
              user-friendly solutions. Let{`'`}s connect and collaborate to
              build something impactful!
            </motion.p>
            <HelloButton />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
           initial={{ x: 100, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center">
            <div className="card">
              <div className="profileImage">
                <img src={profilePic} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
