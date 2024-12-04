import "../styles/GeneralRegulations.css";
import InviteDoc from "./InviteDoc";
import RegulationUpdate from "./Utils/RegulationUpdate";

export function GeneralRegulations() {
  return (
    <div className="general-regulations-container">
      <h1 className="general-regulations-title">
        Règlementation Générale - Formation Frontend et Backend
      </h1>

      <p className="introduction">
        Bienvenue dans la formation <strong>Frontend</strong> ou{" "}
        <strong>Backend</strong> proposée par NEHONIX. Notre objectif est de
        vous fournir les bases et les outils nécessaires pour exceller dans le
        développement web, en mettant un accent particulier sur la pratique et
        la collaboration.
      </p>

      <section className="regulations-section">
        <h2>1. Objectif de la Formation</h2>
        <p>
          La formation vise à former des développeurs capables de travailler en
          équipe ou de réaliser des projets en solo, avec une spécialisation en{" "}
          <strong>Frontend</strong> (interface utilisateur) ou{" "}
          <strong>Backend</strong> (logique serveur). Une fois formés, vous
          serez prêts à :
        </p>
        <ul>
          <li>Concevoir et déployer des applications web modernes.</li>
          <li>
            Collaborer sur de gros projets grâce à des méthodologies claires.
          </li>
        </ul>
      </section>

      <section className="regulations-section">
        <h2>2. Structure de la Formation</h2>
        <div className="formation-tracks">
          <div className="frontend-track">
            <h3>Frontend</h3>
            <ul>
              <li>Initiation à HTML, CSS, et JavaScript.</li>
              <li>
                Approfondissement des frameworks comme React.js (ou autre).
              </li>
              <li>Pratique et projets collaboratifs.</li>
            </ul>
          </div>

          <div className="backend-track">
            <h3>Backend</h3>
            <ul>
              <li>Initiation à la logique serveur avec Node.js.</li>
              <li>Gestion des bases de données et des APIs.</li>
              <li>Travaux pratiques intégrés avec le Frontend.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="regulations-section">
        <h2>3. Fonctionnement de la Formation</h2>
        <ol>
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

      <section className="regulations-section">
        <h2>4. Engagements et Responsabilités</h2>
        <ul>
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

      <section className="regulations-section">
        <h2>5. Règles de Communication</h2>
        <ul>
          <li>
            Toute communication se fait sur l'application pour un suivi clair.
          </li>
          <li>
            Les questions personnelles doivent être envoyées par message privé
            ou par email.
          </li>
        </ul>
      </section>

      <section className="regulations-section">
        <h2>6. Modalités d'Inscription</h2>
        <ul>
          <li>
            La formation <strong>Frontend ou Backend</strong> est gratuite pour
            ceux qui se sont inscrits à temps.
          </li>
          <li>
            Toute demande de formation <strong>Fullstack</strong> (Frontend +
            Backend) est payante, sauf dérogation spéciale.
            <a
              style={{ color: "rgb(0, 183, 255)" }}
              href="https://nehonix.space/doc/regulations/fullStack"
            >
              En savoir davantage
            </a>
          </li>
        </ul>
      </section>

      <section className="regulations-section">
        <h2>7. Sanctions</h2>
        <ul>
          <li>Non-respect des règles = avertissement.</li>
          <li>Répétition = exclusion.</li>
        </ul>
      </section>
      <InviteDoc props={8} type="general" />
      <RegulationUpdate props={9} />
    </div>
  );
}

export default GeneralRegulations;
