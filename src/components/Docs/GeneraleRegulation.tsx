import "../styles/GeneralRegulations.css";
import InviteDoc from "./InviteDoc";
import RegulationUpdate from "./Utils/RegulationUpdate";
import { ModernLayout } from "./layout/ModernLayout";

export function GeneralRegulations() {
  return (
    <ModernLayout>
      <div className="general-regulations-container">
        <h1 className="modern-title">
          Règlementation Générale - Formation Frontend et Backend
        </h1>

        <p className="modern-text introduction">
          Bienvenue dans la formation <strong>Frontend</strong> ou{" "}
          <strong>Backend</strong> proposée par NEHONIX. Notre objectif est de
          vous fournir les bases et les outils nécessaires pour exceller dans le
          développement web, en mettant un accent particulier sur la pratique et
          la collaboration.
        </p>

        <section className="modern-section">
          <h2 className="modern-subtitle">1. Objectif de la Formation</h2>
          <p className="modern-text">
            La formation vise à former des développeurs capables de travailler en
            équipe ou de réaliser des projets en solo, avec une spécialisation en{" "}
            <strong>Frontend</strong> (interface utilisateur) ou{" "}
            <strong>Backend</strong> (logique serveur). Une fois formés, vous
            serez prêts à :
          </p>
          <ul className="modern-list">
            <li>Concevoir et déployer des applications web modernes</li>
            <li>
              Collaborer sur de gros projets grâce à des méthodologies claires
            </li>
          </ul>
        </section>

        <section className="modern-section">
          <h2 className="modern-subtitle">2. Structure de la Formation</h2>
          <div className="formation-tracks">
            <div className="track-card">
              <h3>Frontend</h3>
              <ul className="modern-list">
                <li>Initiation à HTML, CSS, et JavaScript</li>
                <li>
                  Approfondissement des frameworks comme React.js (ou autre)
                </li>
                <li>Pratique et projets collaboratifs</li>
              </ul>
            </div>

            <div className="track-card">
              <h3>Backend</h3>
              <ul className="modern-list">
                <li>Initiation à la logique serveur avec Node.js</li>
                <li>Gestion des bases de données et des APIs</li>
                <li>Travaux pratiques intégrés avec le Frontend</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="modern-section">
          <h2 className="modern-subtitle">3. Fonctionnement de la Formation</h2>
          <ol className="modern-list">
            <li>
              <strong>Horaires</strong>: Les sessions sont annoncées à l'avance
              via l'application. Vous êtes responsables de vérifier les plannings.
            </li>
            <li>
              <strong>Exercices</strong>: Obligatoires pour valider vos acquis.
            </li>
            <li>
              <strong>Collaborations</strong>: Certaines tâches nécessiteront de
              travailler en groupe.
            </li>
          </ol>
        </section>

        <section className="modern-section">
          <h2 className="modern-subtitle">4. Engagements et Responsabilités</h2>
          <ul className="modern-list">
            <li>
              <strong>Assiduité</strong>: Toute absence injustifiée à 5 séances
              consécutives entraîne une disqualification de la formation (sauf cas
              exceptionnel).
            </li>
            <li>
              <strong>Participation active</strong>: Vous devez être présent et
              participer aux discussions.
            </li>
            <li>
              <strong>Respect des deadlines</strong>: Les projets et exercices ont
              des délais stricts.
            </li>
          </ul>
        </section>

        <section className="modern-section">
          <h2 className="modern-subtitle">5. Règles de Communication</h2>
          <ul className="modern-list">
            <li>
              Toute communication se fait sur l'application pour un suivi clair.
            </li>
            <li>
              Les questions personnelles doivent être envoyées par message privé
              ou par email.
            </li>
          </ul>
        </section>

        <section className="modern-section">
          <h2 className="modern-subtitle">6. Modalités d'Inscription</h2>
          <ul className="modern-list">
            <li>
              La formation <strong>Frontend ou Backend</strong> est gratuite pour
              ceux qui se sont inscrits à temps.
            </li>
            <li>
              Toute demande de formation <strong>Fullstack</strong> (Frontend +
              Backend) est payante, sauf dérogation spéciale.{" "}
              <a
                style={{ color: "#3498db" }}
                href="https://nehonix.space/doc/regulations/fullStack"
              >
                En savoir davantage
              </a>
            </li>
          </ul>
        </section>

        <section className="modern-section">
          <h2 className="modern-subtitle">7. Sanctions</h2>
          <ul className="modern-list">
            <li>Non-respect des règles = avertissement</li>
            <li>Répétition = exclusion</li>
          </ul>
        </section>

        <InviteDoc props={8} type="general" />
        <RegulationUpdate props={9} />
      </div>
    </ModernLayout>
  );
}

export default GeneralRegulations;
