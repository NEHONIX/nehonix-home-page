import React from 'react';
import './styles/Features.css';
import { Code, Cpu, Globe, Rocket, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: <Globe size={32} />,
    title: "Solutions Web Innovantes",
    description: "Développement d'applications web modernes et performantes avec les dernières technologies."
  },
  {
    icon: <Shield size={32} />,
    title: "Sécurité Renforcée",
    description: "Protection avancée de vos données et systèmes avec les meilleures pratiques de sécurité."
  },
  {
    icon: <Code size={32} />,
    title: "Développement Sur Mesure",
    description: "Solutions personnalisées adaptées à vos besoins spécifiques et objectifs business."
  },
  {
    icon: <Users size={32} />,
    title: "Formation Professionnelle",
    description: "Programmes de formation intensifs pour développeurs et professionnels du numérique."
  },
  {
    icon: <Cpu size={32} />,
    title: "Intelligence Artificielle",
    description: "Intégration de solutions IA avancées pour optimiser vos processus."
  },
  {
    icon: <Rocket size={32} />,
    title: "Innovation Continue",
    description: "Veille technologique et adoption des dernières innovations du marché."
  }
];

export function Features() {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Nos Services</h2>
        <p>Découvrez notre gamme complète de solutions numériques innovantes</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}