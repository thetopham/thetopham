
// page.tsx
import Image from 'next/image';

export default function Page() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div>
        <Image src="app/rise-of-man/naturevsindustry.png" alt="Nature vs Industry" width={600} height={400} />
      </div>

      <div>
        <h2>Matthew R. Topham</h2>
        <h3>Professor Elizabeth Jackson</h3>
        <h4>Eng 122-500 Composition II</h4>
        <p>24 Apr. 2022</p>
      </div>

      <h1>The Population Explosion of Mankind: To What Extent Has Man Influenced the World?</h1>
      <h2>Matthew R. Topham</h2>
      <h3>April 24th, 2022</h3>

      <h4>Audience: Corporate entities and people of the earth who care about the planet and our future as a species.</h4>

      <div>
        <Image src="/world.jpg" alt="World" width={600} height={400} />
      </div>

      <section style={{ textAlign: 'left', margin: '0 auto', maxWidth: '800px' }}>
        <p>
          Man has influenced the world. The countries of the first world have unintentionally changed the natural course
          of the planet through our industrialized society...
        </p>
        {/* Continue adding paragraphs here... */}
      </section>

      <div>
        <Image src="/climate change incoming sunlight.jpg" alt="Solar Activity and Global Temperature" width={600} height={400} />
        <p>(Climate Change: Incoming Sunlight)</p>
      </div>

      {/* Add more images, paragraphs, and works cited here as needed */}
    </div>
  );
}
