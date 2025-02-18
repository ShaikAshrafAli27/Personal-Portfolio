import React from "react";
import aboutMe from "../assets/aboutMe.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="h-[350px] rounded-lg" src={aboutMe} alt="logo" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 lg:mt-20 max-w-xl py-6 ">
              I am a dedicated and versatile full stack developer with a passion
              for creating efficient and user-friendly web applications. My
              journey in web development began with a deep curiosity for how
              things work, and it has evolved into a career where I continuously
              strive to learn and adapt to new challenges. I thrive in
              collaborative environments and enjoy solving complex problems to
              deliver high-quality solutions. Outside of coding, I enjoy staying
              active, exploring new technologies, and contributing to
              open-source projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
