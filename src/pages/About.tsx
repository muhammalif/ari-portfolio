const About = () => {
  const skills = ["AutoCAD", "SketchUp", "Enscape", "Photoshop"];

  return (
    <main className="flex-grow pt-32 pb-section-gap px-6 md:px-margin-edge max-w-container-max mx-auto w-full bg-grid">
      <header className="mb-16 md:mb-section-gap max-w-4xl">
        <h1 className="font-display-xl text-4xl md:text-5xl lg:text-display-xl text-primary mb-8 dark:text-white">
          Di Balik Garis & Ruang
        </h1>
        <div className="h-px w-full bg-outline-variant mb-8 max-w-2xl dark:bg-neutral-700"></div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl dark:text-neutral-300">
          8+ years of dedicated experience since 2018, navigating the intricate balance between
          construction reality and design vision. Currently advancing architectural knowledge as a
          student at Tanri Abeng University.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="col-span-1 md:col-span-5 relative group">
          <div className="aspect-[3/4] w-full bg-surface-container-high border border-outline-variant p-4 relative overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary dark:border-white"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary dark:border-white"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary dark:border-white"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary dark:border-white"></div>
            <img
              alt="Architectural portrait"
              className="w-full h-full object-cover filter grayscale opacity-90 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 dark:mix-blend-normal"
              src="https://res.cloudinary.com/doz86nkh3/image/upload/v1777218105/Scene_5_1_zhieey.jpg"
            />
          </div>
          <div className="absolute -bottom-6 left-0 font-technical-data text-technical-data text-on-surface-variant dark:text-neutral-400">
            FIG. 1 / A.S.F. — PORTRAIT
          </div>
        </div>
        <div className="col-span-1 md:col-span-6 md:col-start-7 pt-12 md:pt-0">
          <section className="mb-24">
            <h2 className="font-label-caps text-label-caps text-secondary mb-12 dark:text-orange-400">
              PROFESSIONAL CHRONOLOGY
            </h2>
            <div className="relative border-l border-outline-variant ml-3 space-y-12 dark:border-neutral-700">
              <div className="relative pl-10">
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-surface border-2 border-secondary rounded-none dark:bg-black dark:border-orange-400"></div>
                <div className="flex flex-col mb-1">
                  <span className="font-technical-data text-technical-data text-secondary mb-1 dark:text-orange-400">
                    2024 — PRESENT
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary dark:text-white">
                    Freelance
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-300">
                  Architecture, Structure, MEP
                </p>
              </div>
              <div className="relative pl-10">
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-surface border-2 border-outline-variant rounded-none dark:bg-black dark:border-neutral-500"></div>
                <div className="flex flex-col mb-1">
                  <span className="font-technical-data text-technical-data text-on-surface-variant mb-1 dark:text-neutral-400">
                    2020 — 2023
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary dark:text-white">
                    PT. Agung Intiland
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-300">
                  Architecture Drafter, Structure, MEP
                </p>
              </div>
              <div className="relative pl-10">
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-surface border-2 border-outline-variant rounded-none dark:bg-black dark:border-neutral-500"></div>
                <div className="flex flex-col mb-1">
                  <span className="font-technical-data text-technical-data text-on-surface-variant mb-1 dark:text-neutral-400">
                    2018 — 2020
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary dark:text-white">
                    PT. Pamindo Prima Utama Mandiri
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-300">
                  Fabrication Drafter, Estimator
                </p>
              </div>
              <div className="relative pl-10">
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-surface border-2 border-outline-variant rounded-none dark:bg-black dark:border-neutral-500"></div>
                <div className="flex flex-col mb-1">
                  <span className="font-technical-data text-technical-data text-on-surface-variant mb-1 dark:text-neutral-400">
                    2017
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary dark:text-white">
                    PT. Prima Detailindo
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-300">
                    Intern - Architecture Drafter
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="font-label-caps text-label-caps text-secondary mb-8 dark:text-orange-400">
              TECHNICAL PROFICIENCY
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 border border-outline-variant font-technical-data text-technical-data text-primary bg-surface-container-lowest dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;