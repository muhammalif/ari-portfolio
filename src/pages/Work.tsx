export interface Project {
  title: string;
  category: string;
  year: string;
  img: string;
  offset?: boolean;
}

const Work = () => {
  const projects: Project[] = [
    {
      title: "Ocean Farm Eco-Resort",
      category: "Hospitality",
      year: "2023",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA23PfFyJUuxHdk-8p3e7sANd6W-pCK409nolyyCz8iHn5X5DUbU7yaoQ17PK49qirtm3Wp7Xf5dVdELQMujIWm4pP0Gz-i5gw8X_GCtoueBoTMUV6exInXIsKKqp49J3kEJQ-KckZ39dSJEtyBDASBNXRLgTEVaoVKCpp_Asnvz1v9upzPa1Q_LEb7BiXTL9H7C-nLla-r7araPKehGTfkRcCPSDdbHBcLAEHl9mWQiN9frh02Gw4jWn8yPcBMxrNDzAO_NNuR9rU",
    },
    {
      title: "Revitalisasi Stasiun Jakarta Kota",
      category: "Civic / Green Roof",
      year: "2022",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1CqtvhAPgpkroalaCMVxS1dgC1dlEBz4NG5ASaCB7MLm9ECmJeRJfyV2VhkY1zrHP4wZikA-0OxV7CzIerkxmr2zdvviSh6mICX0h-lj2DFflde4sHUO4uciLmZlo8zRsFTIqrGL1nEzwflFt3fmvK9mpf-xB6jdTkAodalvTebVaLLu2H8snILGC3oHHwUpcMoM3APpHNMbpegxbFCBbvk9-XfvzB19J2fTmHTfL6Ip8rsdwp5hpZtCwlFZaEgbTnKBn3lQk8JU",
    },
    {
      title: "Mr. T Office",
      category: "Premium Workspace",
      year: "2023",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAumN_BMpzpGEquGkvKqoPYpqapttthW_u181SaVV74ctuoAp19VfxaE0Uc4itPLwz65HuhobpKinKf7jTEDNenxmR4tgXbuz65T5ZKXNjLGD9hEFsZvxC3lopa2cnqJcO4p2PobuxIhcIeMr8XictMUEXvHDJtU1d5axM3TvwlAXcK4FJNpT6hloQPOWM4EXQ-lOBoGUsbzR0I4q1spvyJowNNKYwQSOPcdL0oDKL9gv6vkog5jeScCvvm59p5tvc1Ft5-d3U1aIM",
    },
    {
      title: "Dikichi Resto",
      category: "Commercial Interior",
      year: "2021",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7VdfFURZLPXACIrnxxyN2lJf-e_4R5I8kKRg99UnFAH8-i3M3H5XsLRRpQPjlR4kRe7bJ68F-9lJ7dobVAglW6qW2bOXORcs6vHrNMWhNjeH_RTRKrvndgfQ6FIzSUOvTJqvb9ERTmJbJga2qYVPpeqKsHCABuZPM7UQc5MUlLZTf0vTs91UR0cyBMOeMLBfdGVZ3MB7SS5IKPKQD0WZ54fs3HpGz-rMEIv4aJb3kKUJXFTH2s_XtSmM9-BcbfjAz4ycT1H8n4dA",
      offset: true,
    },
    {
      title: "D'Look Salon",
      category: "Beauty Bar",
      year: "2022",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBut85EUTsROnXEfFNfmigS_2CUCibZynEzVJWjwJhQTQwPhKLT0az1HlIUTzqaS6XaDuoMOVzSF-fRuI3Bg_Nna8inmE_v16HGLKGQ0s_5Xz3wxD-yYWMWNK9epB88Pm24KBFOyypR9uaTiHdHGxYsSOHqHj2me1rT8Mb_yJKw7itLGs0QoZcCO7EZovLGV789S2M_gmN1FUzVKa2Fquv4n1e_MX-i-wSjBSqvUwBxJQ3xS_ZWIdZO9EcZ5SaOwleFI_gJYEcG6wI",
    },
    {
      title: "Rapid-Disaster Relief Shelter",
      category: "Modular Concept",
      year: "2024",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL9EbNcZwHdpS_492l6QiiHcyphSAnvzSmCFG6AoFUstsfgN5z3mzHVj-4epUwchFQ09GHyZdjG5RmMaXWkjqy1X9bCtS2kZBKIzJzuJl1zaP01siZJiI_nWjktQHMJGuLQ3s7dP978q84pNFY7GM3QPODBjJcU8RrfNeP-wPLB4ExTIfA-DsqOqXkoO4pgPndOoeTb8IFhuXUM9N6TZvC5cSTWaZeZ3DgURng2qlZUgcc061R0IcMEEITdNmU7_uFzfB2DbxDLsY",
      offset: true,
    },
  ];

  return (
    <main className="pt-32 pb-section-gap flex-grow">
      <header className="max-w-container-max mx-auto px-gutter mb-24">
        <h1 className="font-display-xl text-display-xl text-on-surface max-w-4xl dark:text-white">
          Karya & Proyek Terpilih
        </h1>
        <div className="w-24 h-0.5 bg-secondary mt-8 dark:bg-orange-400"></div>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-8 max-w-2xl dark:text-neutral-300">
          A curated selection of architectural and interior design projects exploring spatial
          clarity, natural materials, and contextual relevance.
        </p>
      </header>
      <section className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter gap-y-24">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`group border-t border-outline-variant dark:border-neutral-700 pt-6 flex flex-col gap-6 cursor-pointer ${
                project.offset ? "mt-0 md:mt-24" : ""
              }`}
            >
              <div className="relative overflow-hidden w-full aspect-[4/3] bg-surface-container dark:bg-neutral-900">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={project.img}
                />
                <div className="absolute inset-0 bg-tertiary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                  <h3 className="font-headline-md text-headline-md text-on-primary">
                    {project.title}
                  </h3>
                  <div className="h-[1px] w-full bg-outline-variant/30 my-4"></div>
                  <p className="font-technical-data text-technical-data text-inverse-primary tracking-widest uppercase">
                    {project.category} / {project.year}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-baseline px-2">
                <h2 className="font-body-lg text-body-lg text-on-surface dark:text-white">
                  {project.title}
                </h2>
                <span className="font-technical-data text-technical-data text-on-surface-variant dark:text-neutral-400">
                  {project.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Work;