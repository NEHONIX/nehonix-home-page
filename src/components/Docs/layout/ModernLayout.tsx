import { Background3D } from "../../3D/Background3D";
import "../styles/modernLayout.css";

interface ModernLayoutProps {
  children: React.ReactNode;
}

export function ModernLayout({ children }: ModernLayoutProps) {
  return (
    <div className="modern-layout">
      <Background3D />
      <div className="modern-content">
        {children}
      </div>
    </div>
  );
}
