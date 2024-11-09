// app/projects/[slug]/layout.tsx
import MatrixRainingCode from "../../components/MatrixRainingCode";
import Particles from "../../components/particles";

export default function ProjectSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-x-hidden">
      <MatrixRainingCode /> {/* Matrix rain effect */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      {children}
    </div>
  );
}
