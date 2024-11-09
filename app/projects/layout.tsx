// projects/layout.tsx
import MatrixRainingCode from "../components/MatrixRainingCode";

export default function ProjectsLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-x-hidden">
      <MatrixRainingCode /> {/* Matrix rain effect */}
     
      {children}
    </div>
  );
}
