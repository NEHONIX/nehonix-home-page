function Contact({ props }: { props: number }) {
  return (
    <section className="regulations-section">
      <h2>{props}. Contact et Support</h2>
      <p>
        Pour toute question ou assistance, contactez-nous via l'application ou
        par email : <strong>support@nehonix.space</strong>.
      </p>
      <p className="final-message">
        Merci pour votre engagement et bon apprentissage ! 🚀
      </p>
    </section>
  );
}

export default Contact;
