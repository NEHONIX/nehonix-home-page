import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Float } from "@react-three/drei";
import { useRef } from "react";
import "./NoFound.css";

function Scene404() {
  const textRef = useRef();

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
        floatingRange={[-1, 1]}
      >
        <Text
          ref={textRef}
          fontSize={5}
          color="#3498db"
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
        >
          404
        </Text>
      </Float>
      <OrbitControls enableZoom={false} />
    </>
  );
}

function PageNoFound() {
  const navigate = useNavigate();
  
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <Scene404 />
          </Canvas>
        </div>
        
        <div className="error-content">
          <h1>Page Non Trouvée</h1>
          <p>
            La page que vous essayez d'accéder n'existe pas ou est momentanément
            indisponible.
          </p>
          
          <div className="error-actions">
            <button onClick={() => navigate('/')} className="home-button">
              Retour à l'accueil
            </button>
            <button onClick={() => navigate(-1)} className="back-button">
              Page précédente
            </button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="circles">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="circle"></div>
        ))}
      </div>
    </div>
  );
}

export default PageNoFound;
