import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import PageNoFound from "./NoFound";
import AppContainer from "./components/AppContainer";
import FullStackRegulations from "./components/Docs/FullStackRegulations";
import GeneralRegulations from "./components/Docs/GeneraleRegulation";
import Training2024 from "./components/Docs/Training2024";
import { Background3D } from "./components/3D/Background3D";

// Modify the interface to allow passing a React element
interface DynamicProps {
  Component: React.ReactElement;
  title: string;
}

export function DynamicTitleWrapper({ Component, title }: DynamicProps) {
  useEffect(() => {
    document.title = title;
  }, [title]); 

  return Component; 
}

function App() {
  return (
    <div>
      <Background3D />
      <Router>
        <Routes>
          <Route path="/" element={<AppContainer />} />
          <Route
            path="/doc/regulations/fullStack"
            element={
              <DynamicTitleWrapper
                Component={<FullStackRegulations />}
                title="NEHONIX - Réglementations Full Stack"
              />
            }
          />
          <Route
            path="/doc/regulations/general"
            element={
              <DynamicTitleWrapper
                Component={<GeneralRegulations />}
                title="NEHONIX - Réglementations Générales"
              />
            }
          />
          <Route
            path="/doc/training/2024"
            element={
              <DynamicTitleWrapper
                Component={<Training2024 />}
                title="NEHONIX - Formation 2024-2026"
              />
            }
          />
          <Route path="*" element={<PageNoFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
