import React from 'react';
import './styles/About.css';
import { Award, Target, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: <Target size={32} />,
    title: "Notre Mission",
    description: "Repousser les limites de l'innovation numérique en créant des solutions technologiques qui transforment les entreprises et enrichissent la vie des utilisateurs."
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Notre Vision",
    description: "Devenir le leader africain des solutions numériques innovantes, en formant la prochaine génération de talents technologiques et en créant un impact durable."
  },
  {
    icon: <Award size={32} />,
    title: "Nos Valeurs",
    description: "Excellence, innovation, intégrité et engagement envers nos clients et partenaires sont les piliers qui guident chacune de nos actions."
  }
];

export function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-header">
          <h2>À Propos de NEHONIX</h2>
          <p className="about-subtitle">
            Une entreprise technologique innovante dédiée à l'excellence et à l'innovation
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        <div className="about-cta">
          <h3>Prêt à Innover Avec Nous ?</h3>
          <p>Rejoignez NEHONIX et transformez vos idées en réalité</p>
          <button className="cta-button" >Commencer l'Aventure</button>
        </div>
      </div>
    </section>
  );
}