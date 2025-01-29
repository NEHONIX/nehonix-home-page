<<<<<<< HEAD
import PropTypes from "prop-types";

function InviteDoc({
  props,
  type,
}: {
  props: number;
  type: "default" | "general";
}) {
  return (
    <section className="regulations-section">
      <h2>{props}. Promotion et Recommandation</h2>
      <p>
        Afin de renforcer notre communauté et de permettre à d'autres personnes
        de bénéficier de nos formations de qualité, chaque membre actif est
        encouragé à :
      </p>
      <ul>
        <li>
          Inviter un minimum de <strong>5 personnes</strong> à rejoindre notre
          programme ou à s'inscrire.
        </li>
        <li>
          Partager l'expérience de la formation sur les réseaux sociaux avec des
          hashtags dédiés, comme <em>#NEHONIXFormation</em>.
        </li>
      </ul>
      <p>
        Ces initiatives sont récompensées par des avantages, et contribuent à
        garantir la gratuité de certaines options pour les futurs participants.
        Elles assurent également la pérennité de nos projets ambitieux.
      </p>
      <p>
        Les membres qui parviennent à inviter un nombre important de nouveaux
        utilisateurs pourront bénéficier d'une réduction sur{" "}
        {type === "default"
          ? `nos prochaines formations ou d'autres avantages exclusifs.`
          : `les formations fullStack.`}
      </p>
    </section>
  );
}

// Définition des types des props pour la validation
InviteDoc.propTypes = {
  props: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["default", "general"]).isRequired,
};

export default InviteDoc;
=======
import PropTypes from "prop-types";

function InviteDoc({
  props,
  type,
}: {
  props: number;
  type: "default" | "general";
}) {
  return (
    <section className="regulations-section">
      <h2>{props}. Promotion et Recommandation</h2>
      <p>
        Afin de renforcer notre communauté et de permettre à d'autres personnes
        de bénéficier de nos formations de qualité, chaque membre actif est
        encouragé à :
      </p>
      <ul>
        <li>
          Inviter un minimum de <strong>5 personnes</strong> à rejoindre notre
          programme ou à s'inscrire.
        </li>
        <li>
          Partager l'expérience de la formation sur les réseaux sociaux avec des
          hashtags dédiés, comme <em>#NEHONIXFormation</em>.
        </li>
      </ul>
      <p>
        Ces initiatives sont récompensées par des avantages, et contribuent à
        garantir la gratuité de certaines options pour les futurs participants.
        Elles assurent également la pérennité de nos projets ambitieux.
      </p>
      <p>
        Les membres qui parviennent à inviter un nombre important de nouveaux
        utilisateurs pourront bénéficier d'une réduction sur{" "}
        {type === "default"
          ? `nos prochaines formations ou d'autres avantages exclusifs.`
          : `les formations fullStack.`}
      </p>
    </section>
  );
}

// Définition des types des props pour la validation
InviteDoc.propTypes = {
  props: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["default", "general"]).isRequired,
};

export default InviteDoc;
>>>>>>> 6a0d284372c48df77baf6f1da3006b866cae8f04
