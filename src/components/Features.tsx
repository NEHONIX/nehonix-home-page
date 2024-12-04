import { Brain, Shield, Zap, Users } from 'lucide-react';
import '../styles/Features.css';

const features = [
  {
    icon: Brain,
    title: "Intelligence de pointe",
    description: "Intégration d'algorithmes intelligents pour simplifier vos processus"
  },
  {
    icon: Shield,
    title: "Sécurité avant tout",
    description: "Protection de vos données grâce à des solutions robustes et fiables"
  },
  {
    icon: Zap,
    title: "Efficacité optimisée",
    description: "Maximisez votre performance tout en minimisant la complexité"
  },
  {
    icon: Users,
    title: "Expérience unique",
    description: "Des outils personnalisés et un accompagnement sur mesure pour répondre à vos besoins"
  }
];

export function Features() {
  return (
    <div className="features">
      <div className="container">
        <h2 className="features-title">
          Pourquoi NEHONIX ?
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <feature.icon className="feature-icon" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}