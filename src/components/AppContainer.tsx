import { About } from "./About";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { HomeScene } from "./3D/HomeScene";
import { useEffect, useRef } from "react";
import "./styles/AppContainer.css";

function AppContainer() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <HomeScene />
      <div className="content-wrapper">
        <Hero />
        <div ref={featuresRef}>
          <Features />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
      </div>
    </div>
  );
}

export default AppContainer;
