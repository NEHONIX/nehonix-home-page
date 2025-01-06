import "./styles/training2024.css";
import Contact from "./Utils/Contact";
import RegulationUpdate from "./Utils/RegulationUpdate";
import Curriculum from "./components/Curriculum";
import { ModernLayout } from "./layout/ModernLayout";

function Training2024() {
  return (
    <ModernLayout>
      <div className="training-container">
        <h1 className="training-title">Formation 2024-2026 - Organisation et règlement</h1>
        
        <div className="confidentiality-notice">
          <h2>AVIS DE CONFIDENTIALITÉ</h2>
          <p>Ce document est protégé par le droit d'auteur. Toute reproduction ou diffusion non autorisée est strictement interdite et peut faire l'objet de poursuites judiciaires.</p>
        </div>

        <section className="training-section">
          <h2>Structure de la formation</h2>
          <p>La formation est divisée en 3 sessions principales. Chaque session comprend trois séances, avec une durée maximale de 2 mois par séance.</p>
        </section>

        <section className="training-section">
          <h2>Protocole des rendez-vous</h2>
          <ul>
            <li>Les participants sont chargés de créer le lien pour chaque séance</li>
            <li>Un délai de 5 à 10 minutes peut être accordé au début de chaque séance</li>
            <li>Ce temps doit être utilisé pour la révision et la préparation</li>
          </ul>
        </section>

        <section className="training-section">
          <h2>Règles de conduite</h2>
          <div className="subsection">
            <h3>1. Réactivité et engagement</h3>
            <ul>
              <li>Une participation active est exigée dès le début des cours</li>
              <li>L'énergie et l'enthousiasme sont considérés comme essentiels à la progression</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>2. Gestion des conflits</h3>
            <ul>
              <li>5 tentatives d'inaction entraînent un avertissement</li>
              <li>La persistance d'une attitude passive après avertissement peut conduire à une radiation des bases de données</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>3. Présence et assiduité</h3>
            <ul>
              <li>4 absences non justifiées entraînent une rétrogradation de niveau</li>
              <li>Les certificats déjà obtenus peuvent être invalidés en cas de manquements graves</li>
              <li>Toute attitude non-constructive conduira à une exclusion</li>
            </ul>
          </div>
        </section>

        <section className="training-section">
          <h2>Système de validation</h2>
          <div className="subsection">
            <h3>1. Validation des séances</h3>
            <p>Pour valider une séance, vous devez :</p>
            <ul>
              <li>Suivre assidûment les cours</li>
              <li>Réussir les tests surprise organisés pendant la période de formation</li>
              <li>Passer avec succès l'examen de fin de séance</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>2. Progression entre les niveaux</h3>
            <ul>
              <li>La progression vers la séance suivante n'est possible qu'après validation de la séance en cours</li>
              <li>Les résultats des examens sont communiqués dès la fin des épreuves</li>
              <li>Seuls les étudiants ayant validé pourront poursuivre vers la séance suivante</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>3. En cas d'échec</h3>
            <p>Pour l'examen récent :</p>
            <ul>
              <li>Les étudiants non retenus seront rétrogradés au niveau inférieur
                <ul>
                  <li>Exemple : Niveau 1 (N1) → Niveau 0 (N0)</li>
                  <li>Les étudiants déjà au N0 y resteront</li>
                </ul>
              </li>
              <li>Après deux échecs au même niveau :
                <ul>
                  <li>L'étudiant sera retiré de la formation</li>
                  <li>Une reprise sera possible moyennant des frais de formation</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="training-section">
          <h2>Vision</h2>
          <p>J'ai une grande ambition, et c'est ensemble que nous y parviendrons. Dans un contexte où d'autres continents progressent rapidement, l'Afrique ne peut se permettre de perdre du temps. Cette année sera placée sous le signe de la rigueur et de l'excellence.</p>
        </section>

        <Curriculum />

        <RegulationUpdate props={10} />
        <Contact props={11} />
      </div>
    </ModernLayout>
  );
}

export default Training2024;
