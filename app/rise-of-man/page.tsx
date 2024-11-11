"use client";
import React from "react";
import Image from "next/image";
import { Navigation } from "../components/nav";

export default function RiseOfManPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white">
      <Navigation />

      <div className="flex flex-col items-center justify-center py-10">
        {/* Header Image */}
        <div className="my-6">
          <Image
            src="/naturevsindustry.png"
            alt="Nature vs Industry"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Title and Metadata */}
        <div className="text-center mt-6">
          <h2 className="text-xl font-semibold">Matthew R. Topham</h2>
          <h3>Professor Elizabeth Jackson</h3>
          <h4>Eng 122-500 Composition II</h4>
          <p>24 Apr. 2022</p>
        </div>

        <h1 className="mt-8 text-3xl font-bold text-center max-w-2xl">
          The Population Explosion of Mankind: To What Extent Has Man Influenced the World?
        </h1>
        <h2 className="text-lg mt-4">Matthew R. Topham</h2>
        <h3 className="text-lg">April 24th, 2022</h3>

        {/* Audience */}
        <h4 className="mt-6 text-center text-lg leading-8 text-zinc-300 max-w-2xl px-4 py-4 bg-black/30 rounded-lg shadow-lg">
          Audience: Corporate entities and people of the earth who care about the planet and our future as a species.
        </h4>

        {/* Second Image */}
        <div className="my-8">
          <Image
            src="/world.jpg"
            alt="World"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <section className="mt-8 text-left text-zinc-300 max-w-4xl leading-8 px-4 py-4 bg-black/30 rounded-lg shadow-lg">
         <p className="mb-6" style={{ textIndent: '1.5rem' }}>
            Man has influenced the world. The countries of the first world have unintentionally changed the natural course of the planet through our industrialized society. The byproduct of our society, carbon dioxide, has changed the natural cycle of the planet. Yet the first world countries are some of the least to feel the impact of their actions. Those who contribute least to the problem of climate change, those in developing countries, are those who feel the greatest impact through the changing environment. We must realize that we are all in this together, there is no us and them, its just us, mankind. With great power comes great responsibility, and as members of the first world, we have a great responsibility as the stewards of planet earth. We must lead by example and pave the way through our actions, in our science, and how we treat one another.
          </p>        
          <p className="mb-6" style={{ textIndent: '1.5rem' }}>
          Those who contribute the most to climate change are corporations that transcend individual government jurisdiction and individuals of first world countries, corporations that have grown faster than government jurisdiction can create laws to govern them. These corporations know that they have a responsibility to leave the planet better than they received it, especially since a corporate entity can live longer than a single man, and therefore has a greater responsibility to our future as a species. It is in a corporation’s best interest to preserve the earth for future generations, as the future of mankind depends on a sustainable biosphere, and thus corporate entities have a vested interest in this goal as well, because without man, corporations cannot exist. If we are to reach a population of 11 billion, it is best that we do so in a way that works with nature, and not against it.  Corporations know about their impact on the planet through the scientific community. It is best if one considers how the individual actions of first world citizens and corporations impact the collective of mankind and the rest of the world. 
          </p>
         <p className="mb-6" style={{ textIndent: '1.5rem' }}>
          Mankind values the earth, it’s only home. Mankind knows the earth is a planet with a system of interconnected systems. Influencing one system has cascading affects in other systems, a balance we are currently learning about and how to best maintain. We live in a system of interconnected systems. Small actions in one part of the world can have big implications in other parts of the world, especially when it comes to the environment. The future of planet earth is at stake; what we do in the next 100 years will pave the way for those who come after us. Mankind wants to be remembered as those who preserved the world for those who came after them, as those who passed the torch to the next generation, and not those who threw away the gift given to them.  
          </p>
          <p className="mb-6" style={{ textIndent: '1.5rem' }}>
          Mankind can compete to solve the problem of climate change. The individual can vote with their money by purchasing from climate friendly companies and voluntarily donating to offset their carbon footprint to be net neutral. Corporations can do the same as individuals and challenge one another to be net neutral. It is important to note that corporations have a greater responsibility than the individual as they have a greater impact, so it is especially important that corporations lead by example in their action, science, how they treat one another, and policy. It is in corporations’ best interest to preserve the planet, so that they will still have a healthy population for their products. 
          </p>
          <p className="mb-6" style={{ textIndent: '1.5rem' }}>
          Citizens of planet earth, mankind has grown to a point where collectively we have changed the natural course of our planet. This may have been in our best interest, for if we had not burned fossil fuels, the ice age that we are currently living in may have advanced further and we could have potentially regressed deeper into our current ice age, bringing more destruction to the population through lack of food and crops than warming temperatures. 
          </p>
          <p className="mb-6" style={{ textIndent: '1.5rem' }}>
          Some may say that the solar output of the sun has changed and that is the cause of the changing climate. This is incorrect as the solar output of the sun has remained relatively constant varying only slightly in total solar irradiance over the last 400 years. Solar activity has remained relatively stable since we first began observations in the 1600’s. The chart below provided by NOAA represents solar activity and difference from average global temperature, with solar activity remaining stable and average global temperature variance increasing to up to 1.5 degrees in 2010, showing a break from the previous correlation of average global temperature and solar output, leading to another variable affecting the equation, the possibility that it may be caused by the rise of the industrial man and his influence on the world.
          </p>         
        </section>

        {/* Climate Change Image and Caption */}
        <div className="my-8 text-center">
          <Image
            src="/climate%20change%20incoming%20sunlight.jpg"
            alt="Solar Activity and Global Temperature"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-2 text-zinc-400">(Climate Change: Incoming Sunlight)</p>
        </div>

       
        <section className="mt-8 text-left text-zinc-300 max-w-4xl leading-8 px-4 py-4 bg-black/30 rounded-lg shadow-lg">
          <p>
           It is important to acknowledge that humanity has influenced the planet and that collectively, our decisions and actions make a difference in creating and shaping our world for us and our children to thrive, and for our species to continue. We must leave the world better than we received it, and make improvements, so that our children can continue our work and make the world a place where humanity can flourish as we were meant to. 
          </p>
          <p>
          Mankind is currently at a population of about eight billion and continuing to increase every day. Over the next hundred years, the population is estimated to grow to about 11 billion. What we do over these next hundred years will influence the world that we live in and the world that we leave our children and pave the way for their success as a species. We cannot change the past, but through our actions in the present, we can change the course of our future. 
          </p>
          <p>
          Adaptability is important in the years to come, as we must adapt to our changing climate and environment. With great power comes great responsibility, and we must be more responsible as a species in preserving the biodiversity of the natural world. We must keep the biodiversity of our forests and oceans. The corals of the great barrier reef are dying, and our forests are being destroyed. The oceans are being polluted and the atmosphere is overflowing with carbon dioxide. Some may even say that we are currently living through the 6th mass extinction. 
          </p>
          <p>
          Yet, all is not lost. Mankind is itself a force of nature, a force that can be used for good. We can preserve our oceans and our forests and keep the biodiversity of planet earth flourishing. If the planet and its biodiversity die, then our chances at success as a species are greatly reduced, but it doesn’t need to be so. This world is changing… but we decide into what.
          </p>
          <p>
          The Anthropocene is the newest geological age defined by man’s introduction of the industrial revolution to our small planet we all call home and will be defined even further by what we do in the years to come.
          </p>
          <p>
          “Adopting the Anthropocene may reverse this trend by asserting that humans are not passive observers of Earth’s functioning. To a large extent the future of the only place where life is known to exist is being determined by the actions of humans. Yet, the power that humans wield is unlike any other force of nature because it is reflexive and therefore can be used, withdrawn or modified. More widespread recognition that human actions are driving far-reaching changes to the life-supporting infrastructure of Earth may well have increasing philosophical, social, economic, and political implications over the coming decades.” (Lewis and Maslin 178).
          </p>
          <p>
          In my research, I was most influenced by an article from the 1980’s by Richard Allen in the magazine Environment and titled “The Impact of CO2 on World Climate.” I was amazed that this issue has been known about since the 1980’s and the accuracy of the article that was so relevant decades later in today’s modern world. Below are some of the most influential quotes from the article. 
          </p>
          <p>
          “If present trends continue, the carbon dioxide in the Earth’s atmosphere will double in about 50 years. Scientists predict that an increase in CO2 of this magnitude will produce a “greenhouse effect” leading to a significant rise in global temperatures. Such temperature changed could be as great as those which separated the different geologic epochs, seriously upsetting an already precarious world ecology and threatening the world’s food supply. The atmospheric accumulation of CO2 poses a unique political problem. Society in its present form is a phenomenon of only the last century. Our institutions and culture developed within a period of nearly absolute climatic stability. As a society we have tended to push our natural resources to the limit, taking the stability of the physical and biological environment for granted. We are now coming to realize that such an attitude is no longer tenable. However, because the CO2 problem is rooted in the most fundamental global energy use and land management practices and because of the inherent uncertainties involved, the international cooperation needed to deal effectively with this issue will be exceedingly difficult to achieve.” (Allen 6) 
          </p>
          <p>
          “The challenge of responding to the CO2 greenhouse effect poses the question of whether human society can respond to any problem beyond the most immediate and potentially catastrophic- the question of whether we can truly determine the course of our own future.” (Allen 38)
          </p>
          <p>
          Since the rise of the industrial revolution, the global population has increased by 7 billion people accelerated by fossil fuels creating advances in industry, productivity, and efficiency. In a relatively short amount of time compared to geological timescales, the amount of carbon dioxide in the atmosphere has grown significantly as a byproduct of the industrial revolution. "The amount of CO₂ in the atmosphere has increased more than 20% in less than 40 years, owing largely to human activities, and representing well over 50% of the total increase in atmospheric carbon dioxide since the onset of the industrial revolution (1750)." (Atmospheric Carbon Dioxide).
          </p>
          <p>
          Society as we know it came to existence during a relatively stable time in the geological climate over a period of about 250 years during an ice age. We are currently living in an ice age as we technically have ice on the north and south pole of the planet. The planet has historically been warmer and colder, primarily warmer over the last 500 million years. Society’s evolution with its industrial revolution and corporate entities evolved only during the last 250 years, a tiny spec on the geological radar. Yet since the industrial revolution we have made changes to the composition of the atmosphere that naturally take thousands of years of to occur. The ocean, plants, and atmosphere cycles are having trouble adapting to an increase of 7 billion humans in two centuries living out of sync with the natural cycle of the planet.
          </p>          
        </section>

        {/* Historical Temperature Trends Image */}
        <div className="my-8 text-center">
          <Image
            src="/temperatures.jpg"
            alt="Historical Temperature Trends"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-2 text-zinc-400">(A 500-million-year survey of Earth's climate reveals dire warning for humanity)</p>
        </div>

         <section className="mt-8 text-left text-zinc-300 max-w-4xl leading-8 px-4 py-4 bg-black/30 rounded-lg shadow-lg">

           </section>
        
         {/* world population past present and future */}
        <div className="my-8 text-center">
          <Image
            src="/population.jpg"
            alt="Historical Temperature Trends"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-2 text-zinc-400">(A 500-million-year survey of Earth's climate reveals dire warning for humanity)</p>
        </div>

         {/* Historical Temperature Trends Image */}
        <div className="my-8 text-center">
          <Image
            src="/app/rise-of-man/temperatures.jpg"
            alt="Historical Temperature Trends"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-2 text-zinc-400">(A 500-million-year survey of Earth's climate reveals dire warning for humanity)</p>
        </div>

        {/* Works Cited Section */}
        <section className="mt-8 text-left text-zinc-300 max-w-4xl leading-8 px-4 py-4 bg-black/30 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Works Cited</h2>
          <ul className="list-disc list-inside">
            <li>
              “A 500-Million-Year Survey of Earth's Climate Reveals Dire Warning for Humanity.” <i>Science</i>, 
              <a href="https://www.science.org/content/article/500-million-year-survey-earths-climate-reveals-dire-warning-humanity" target="_blank" className="text-blue-400"> Science.org</a>.
            </li>
            {/* Add each citation here, following this format */}
          </ul>
        </section>
      </div>
    </div>
  );
}
