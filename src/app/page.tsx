import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/HeaderSection";
import ProjectSection from "@/components/ProjectSection";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Container } from "postcss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-hannahs-colour">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeaderSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
