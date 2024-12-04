import "./NoFound.css";
import { useNavigate } from "react-router-dom";
function PageNoFound() {
  const Back = useNavigate();
  const HandleReturn = () => {
    Back(-1);
  };
  return (
    <div className="pgErrs">
      <section>
        <h1>Erreur 404- NEHONIX</h1>
        {/* <img src="" alt="" /> */}
        <p>
          La page que vous éssayez d'accéder n'existe pas ou est momentairement
          indisponible!
          <button onClick={HandleReturn} className="back">
            <u>Go Back</u>
          </button>
        </p>
        <i className="pageError fas fa-exclamation-triangle"></i>
      </section>
    </div>
  );
}

export default PageNoFound;
