// projects/layout.tsx
import Particles from "../components/particles";
import MatrixRainingCode from "../components/MatrixRainingCode";

export default function ProjectsLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <MatrixRainingCode />
      <Particles
        className="pointer-events-none fixed inset-0 z-10 animate-fade-in"
        quantity={100}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-20 bg-gradient-to-tl from-black/95 via-zinc-950/75 to-black/95"
      />
      <div className="relative z-30">{children}</div>
    </div>
  );
}
