function RegulationUpdate({ props }: { props: number }) {
  return (
    <section style={{ color: "red" }} className="regulations-section">
      <h2>{props}. Mise à jour des règles</h2>
      <p>
        Ce document sera mis à jour régulièrement en fonction des besoins. Vous
        serez avertis des changements via l'application.
      </p>
    </section>
  );
}

export default RegulationUpdate;
