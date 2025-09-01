"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>Typescript</li>
        <li>React/Next</li>
        <li>Node</li>
        <li>Express</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>University of Waterloo - Computer Science &apos;26</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-4">
        <li>Composer - Software Engineer</li>
        <li>Arctic Wolf Networks - Software Developer</li>
        <li>Intact Financial Corporation - DevOps Engineer</li>
        <li>Scispot - Fullstack Developer</li>
        <li>Health and Rehab Research - GreenSME Lead Software Engineer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            {[
              "Hi there! Thanks for taking the time to check out my website! If I’m not coding or working on a project, you’ll likely find me painting on a canvas or sketching some doodles!",
              "As a Computer Science student at the University of Waterloo minoring in Fine Arts, I have a strong passion for finding simple solutions to complex problems and paying close attention to details!",
              "Combining my analytical and creative sides together is what I love doing the most!",
            ].map((paragraph, index) => (
              <p key={index} className={`text-base md:text-lg ${index > 0 ? "mt-4" : ""}`}>
              {paragraph}
              </p>
            ))}
          <div className="flex flex-row mt-8 hover:cursor-pointer">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
