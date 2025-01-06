import React from 'react';

const tracks = [
  {
    title: "Fondamentaux du Web",
    modules: [
      "Introduction (Structure, Doctype, métadonnées, balises sémantiques)",
      "Composants HTML (Texte, titres, listes, tableaux, images, médias)",
      "Formulaires (Types d'inputs, validation native, accessibilité)",
      "Projet Pratique (CV en HTML, site vitrine simple)"
    ]
  },
  {
    title: "StyleSheet: CSS Fondamental",
    modules: [
      "Bases CSS (Sélecteurs, Box Model, couleurs, typographie)",
      "Mise en page (Positionnement, Display, Float, Flexbox)",
      "CSS Avancé (Grid, Responsive Design, Animations)",
      "Projet Pratique (Landing page responsive, Dashboard)"
    ]
  },
  {
    title: "JavaScript (JS) - B et F",
    modules: [
      "Fondamentaux (Variables, fonctions, conditions, boucles)",
      "DOM et Events (Manipulation DOM, Event listeners)",
      "JS Moderne (ES6+, Async/await, API)",
      "Projet Pratique (Application météo, Chat en temps réel)"
    ]
  },
  {
    title: "Python",
    modules: [
      "Python Basics (Types, structures, fonctions, modules)",
      "POO Python (Classes, héritage, polymorphisme)",
      "Python Web (Flask, API REST, Database)",
      "Data Science Intro (NumPy, Pandas, Matplotlib)"
    ]
  },
  {
    title: "C++",
    modules: [
      "Bases C++ (Syntaxe, types, contrôle de flux)",
      "POO en C++ (Classes, héritage, polymorphisme)",
      "C++ Moderne (Smart pointers, Lambda, STL)",
      "Programmation système (Threads, IPC, Sockets)"
    ]
  },
  {
    title: "DevOps",
    modules: [
      "Bases DevOps (Linux, Shell, Git avancé)",
      "Containerisation (Docker, Kubernetes)",
      "Infrastructure as Code (AWS/Azure, Terraform)",
      "CI/CD Avancé (Jenkins, GitLab CI, GitHub Actions)"
    ]
  },
  {
    title: "Cybersécurité",
    modules: [
      "Fondamentaux (Cryptographie, authentification)",
      "Sécurité applicative (OWASP Top 10, Tests)",
      "Sécurité système (OS Security, Cloud Security)",
      "Red Team / Blue Team (Ethical hacking, Forensics)"
    ]
  },
  {
    title: "Projets Finals",
    modules: [
      "Application Full Stack Sécurisée",
      "Infrastructure Cloud Sécurisée",
      "Portfolio et Documentation",
      "Certifications (CompTIA, AWS, NEX Cert)"
    ]
  }
];

export function Curriculum() {
  return (
    <section className="training-section">
      <h2>Planning de la Formation</h2>
      <p className="curriculum-intro">
        Le planning de cette formation combine différents niveaux et technologies. 
        Vous progresserez de Développeur Full Stack à Expert Technique.
      </p>
      
      <div className="curriculum-grid">
        {tracks.map((track, index) => (
          <div key={index} className="track-card">
            <h3>{track.title}</h3>
            <ul>
              {track.modules.map((module, moduleIndex) => (
                <li key={moduleIndex}>{module}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Curriculum;
