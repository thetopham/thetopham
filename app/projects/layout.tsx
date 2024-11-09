// projects/layout.tsx
import Particles from "../components/particles";
import MatrixRainingCode from "../components/MatrixRainingCode";

export default function ProjectsLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <MatrixRainingCode /> {/* Matrix rain effect */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      {children}
    </div>
  );
}
