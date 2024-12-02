import { ChevronDown } from "lucide-react";
import "../styles/Hero.css";
import { WhatSappLink } from "./Utils/Links/WhatSapp";

export function Hero() {
  const onButtonClicked = () => {
    const msg = `Bonjours NEHONIX, j'ai un projet et je veux que vous m'aidiez à le réaliser. `;
    const phone = "2250142823399";
    const prepareLink = `${WhatSappLink}phone=${phone}&text=${msg}&type=phone_number&app_absent=0`;
    window.open(prepareLink);
  };
  return (
    <div className="hero">
      <div className="hero-background" />
      <div className="hero-content">
        <img src="/logo.png" alt="NEHONIX" className="hero-logo" />
        <h1 className="hero-title">Bienvenue chez NEHONIX</h1>
        <p className="hero-description">
          La nouvelle génération d'écosystèmes numériques conçus pour repousser
          les limites de l'innovation
        </p>
        <button onClick={onButtonClicked} className="button">
          Nous contacter
        </button>
        <div className="scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
}
