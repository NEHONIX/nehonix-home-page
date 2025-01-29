import React from 'react';
import "./styles/Hero.css";
import { APP_ASSETS } from './Assets/App.assets';

export function Hero() {
  const onButtonClicked = () => {
    const msg = `Bonjours NEHONIX, j'ai un projet et je veux que vous m'aidiez à le réaliser. Je souhaite aussi savoir si possible tout ce qui est en rapport avec vos formations!`;
    const phone = "2250712137266";
    const prepareLink = `https://wa.me/${phone}?text=${msg}`;
    window.open(prepareLink);
  };
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={APP_ASSETS.NEHONIX.LOGO_LIGHT_RM_BG} alt="NEHONIX" className="hero-logo" />
        <h1>Bienvenue chez NEHONIX</h1>
        <p className="hero-subtitle">
          La nouvelle génération d'écosystèmes numériques conçus pour repousser les limites de l'innovation
        </p>
        <div className="hero-buttons">
          <button onClick={onButtonClicked} className="primary-button">NOUS CONTACTER</button>
          <button 
            onClick={() =>
              window.open("/doc/training/2024")
            } 
            className="secondary-button"
          >
            FORMATION 2024-2026
          </button>
        </div> 
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow"></div>
        </div>
      </div>
    </section>
  );
}
