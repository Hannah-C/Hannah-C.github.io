"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 flex items-center">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Hannah!",
                3650,
                "a Web Developer",
                3650,
                "a Fullstack Engineer",
                3650,
                "an Artist",
                3650,
              ]}
              wrapper="span"
              speed={20}
              // style={{ fontSize: "2m", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-hannahs-text text-base sm:text-lg lg:text-xl mb-6">
            Welcome to my portfolio website
          </p>
          <div>
            <Link href="https://github.com/Hannah-C" passHref={true}>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via -purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Github
              </button>
            </Link>
            <Link href="mailto:choihannah2003@gmail.com" passHref={true}>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-hannahs-colour hover:bg-slate-800 rounded-full px-5 py-2">
                  Request CV
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-hannahs-colour-2 w-[250px] h-[250px] relative lg:w-[350px] lg:h-[350px]">
            <div className="rounded-full bg-slate-200 w-[220px] h-[220px] relative lg:w-[320px] lg:h-[320px] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
            <Image
              src="/images/onelineart-modified.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full "
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
