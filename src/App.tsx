import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import AppContainer from "./components/AppContainer";
import PageNoFound from "./NoFound";
import GeneralRegulations from "./components/Docs/GeneraleRegulation";
import React, { useEffect } from "react";
import FullStackRegulations from "./components/Docs/FullStackRegulations";

// Modify the interface to allow passing a React element
interface DynamicProps {
  Component: React.ReactElement; // Change from React.FC to React.ReactElement
  title: string;
}

export function DynamicTitleWrapper({ Component, title }: DynamicProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return Component; // Directly return the component element
}

function App() {
  return (
    <div>
      <BrowserRouter>
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
          <Route path="*" element={<PageNoFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
