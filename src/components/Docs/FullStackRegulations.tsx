import "../styles/Regulations.css"; // You'll need to create this CSS file
import Contact from "./Utils/Contact";
import RegulationUpdate from "./Utils/RegulationUpdate";

function FullStackRegulations() {
  return (
    <div className="regulations-container">
      <h1 className="regulations-title">
        Règlementation et Conditions de la Formation Fullstack
      </h1>

      <section className="regulations-section">
        <h2>1. Objectif de la Formation</h2>
        <p>L'objectif est de vous fournir les compétences nécessaires pour :</p>
        <ul>
          <li>
            Concevoir des applications web complètes (
            <em>Front-end et Back-end</em>).
          </li>
          <li>Collaborer efficacement en équipe sur des projets réels.</li>
          <li>
            Être prêt(e) à intégrer le marché professionnel ou lancer vos
            propres projets.
          </li>
        </ul>
      </section>

      <section className="regulations-section">
        <h2>2. Structure de la Formation</h2>
        <p>La formation est divisée en deux parcours principaux :</p>
        <ol>
          <li>
            <strong>Front-End Development</strong> : HTML, CSS, JavaScript,
            React.js, etc.
          </li>
          <li>
            <strong>Back-End Development</strong> : Node.js, bases de données,
            APIs, etc.
          </li>
        </ol>
        <p>
          Pour les participants inscrits en Fullstack, les deux parcours seront
          accessibles avec une intégration pratique.
        </p>
      </section>

      <section className="regulations-section">
        <h2>3. Modalités de Participation</h2>
        <ul>
          <li>
            <strong>Durée de la formation</strong> : 2 ans (théorie + pratique).
          </li>
          <li>
            <strong>Disponibilité requise</strong> : Chaque participant doit
            s'engager à consacrer au moins <strong>5 heures par semaine</strong>{" "}
            pour suivre les cours et exercices.
          </li>
          <li>
            <strong>Sessions en live</strong> : Présence obligatoire pour les
            sessions clés (des rediffusions seront disponibles en cas d'absence
            justifiée).
          </li>
          <li>
            <strong>Langage utilisé</strong> : Français technique simplifié pour
            une meilleure compréhension.
          </li>
        </ul>
      </section>

      <section className="regulations-section">
        <h2>4. Conditions d'Inscription</h2>
        <ul>
          <li>
            Les inscriptions en <em>Front-End</em> ou <em>Back-End</em> sont
            gratuites pour les membres sélectionnés.
          </li>
          <li>
            L'inscription au parcours <strong>Fullstack</strong> est payante :
            <ul>
              <li>
                Frais : <strong>7, 66 Euro soit 5. 000FCFA</strong>{" "}
                l'inscription et <strong>15,32 Euro soit 10. 000FCFA</strong>{" "}
                par mois.
              </li>
              <li>Paiement non remboursable sauf en cas de force majeure.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="regulations-section">
        <h2>5. Règles Générales</h2>
        <ol>
          <li>
            <strong>Respect et collaboration</strong>
            <ul>
              <li>
                Soyez respectueux envers les autres membres et formateurs.
              </li>
              <li>L'entraide est encouragée, mais le plagiat est interdit.</li>
            </ul>
          </li>
          <li>
            <strong>Punctualité</strong>
            <ul>
              <li>
                Les absences non justifiées répétées peuvent entraîner une
                exclusion temporaire ou définitive.
              </li>
              <li>
                Plus de <strong>5 absences non justifiées</strong> entraîneront
                la perte de vos accès.
              </li>
            </ul>
          </li>
          <li>
            <strong>Usage de l'application NEHONIX</strong>
            <ul>
              <li>
                Toutes les discussions liées aux cours et exercices doivent se
                faire via l'application.
              </li>
              <li>
                Les canaux sont réservés exclusivement à l'apprentissage et au
                partage de connaissances.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="regulations-section">
        <h2>6. Fonctionnalités Premium pour les Membres Fullstack</h2>
        <p>
          Les participants inscrits à la formule Fullstack auront accès à des
          fonctionnalités exclusives :
        </p>
        <ul>
          <li>
            Accès illimité à l'IA intégrée pour vous aider dans vos exercices.
          </li>
          <li>
            Projets réels à développer en équipe, avec suivi personnalisé.
          </li>
          <li>Modules avancés (ex. : tests, CI/CD, déploiement cloud).</li>
          <li>Certification officielle NEHONIX à la fin de la formation.</li>
        </ul>
      </section>

      <section className="regulations-section">
        <h2>7. Sanctions et Exclusions</h2>
        <ul>
          <li>Non-respect des règles = avertissement.</li>
          <li>
            En cas de récidive, vous pouvez être{" "}
            <strong>exclu temporairement</strong> ou{" "}
            <strong>définitivement</strong> sans remboursement (pour les
            formules payantes).
          </li>
          <li>
            Toute tentative de tricherie ou de perturbation sera sévèrement
            sanctionnée.
          </li>
        </ul>
      </section>

      <section className="regulations-section">
        <h2>8. Questions Fréquentes (FAQ)</h2>
        <dl>
          <dt>Q : Puis-je changer de parcours en cours de formation ?</dt>
          <dd>
            Non, sauf si une demande spéciale est validée par l'administration.
          </dd>

          <dt>Q : Que faire si je rencontre un problème technique ?</dt>
          <dd>
            Utilisez l'onglet <em>Support</em> dans l'application pour signaler
            vos problèmes.
          </dd>
        </dl>
      </section>
      <RegulationUpdate props={9} />
      <Contact props={10} />
    </div>
  );
}

export default FullStackRegulations;
