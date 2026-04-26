import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-grow flex flex-col">
      <main className="flex-grow">
        <section className="relative min-h-[80vh] md:h-[884px] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              alt="Architectural Background"
              className="w-full h-full object-cover object-center opacity-60 dark:opacity-30 transition-opacity duration-700"
              src="https://res.cloudinary.com/doz86nkh3/image/upload/v1777056688/herosec_fg3wdc.jpg"
            />
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-neutral-950 dark:via-neutral-950/80 dark:to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-edge w-full grid grid-cols-12 gap-gutter mt-20 md:mt-0">
            <div className="col-span-12 md:col-span-10 lg:col-span-8 flex flex-col justify-center items-start">
              <h1 className="font-display-xl text-4xl md:text-display-xl text-neutral-900 dark:text-white mb-6 leading-tight drop-shadow-sm">
                Merancang Ruang, Membangun Masa Depan.
              </h1>
              <p className="font-body-lg text-body-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mb-10 leading-relaxed">
                Architecture & Interior Drafter with 8+ years of experience in creating precise and inspiring spatial solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest hover:bg-surface-tint transition-colors duration-300 rounded-none dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                >
                  See My Work
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-outline text-on-background font-label-caps text-label-caps tracking-widest hover:bg-surface-variant transition-colors duration-300 rounded-none dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-800"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="h-section-gap"></div>

        <section className="max-w-container-max mx-auto px-6 md:px-margin-edge w-full">
          <div className="mb-16 border-b border-outline-variant pb-4 flex justify-between items-end dark:border-neutral-700">
            <h2 className="font-headline-lg text-headline-lg text-on-background dark:text-white">
              Selected Works
            </h2>
            <Link
              to="/work"
              className="font-label-caps text-label-caps text-secondary hover:text-on-background transition-colors flex items-center gap-2 dark:text-orange-400 dark:hover:text-white"
            >
              VIEW ALL <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
            <div className="md:col-span-8 relative group overflow-hidden border border-outline-variant/30 dark:border-neutral-800">
              <img
                alt="Modern Villa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://res.cloudinary.com/doz86nkh3/image/upload/v1777049514/oceanfarm1_rmxqkt.jpg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/50 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out dark:bg-black/80 dark:border-neutral-800">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-background mb-2 dark:text-white">
                      Ocean Farm Eco-Resort
                    </h3>
                    <p className="font-technical-data text-technical-data text-on-surface-variant dark:text-neutral-400">
                      Residential • 2023
                    </p>
                  </div>
                  <button className="w-12 h-12 flex items-center justify-center bg-primary text-on-primary hover:bg-secondary transition-colors dark:bg-white dark:text-black dark:hover:bg-orange-400">
                    <span className="material-symbols-outlined">north_east</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 relative group overflow-hidden border border-outline-variant/30 bg-surface-container-low dark:border-neutral-800 dark:bg-neutral-900">
              <img
                alt="Urban Loft"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://res.cloudinary.com/doz86nkh3/image/upload/v1777049561/greenroof_fmc5ea.jpg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/50 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out dark:bg-black/80 dark:border-neutral-800">
                <h3 className="font-headline-md text-xl text-on-background mb-1 dark:text-white">
                  Urban Revival Loft
                </h3>
                <p className="font-technical-data text-xs text-on-surface-variant dark:text-neutral-400">
                  Green Roof Architecture • 2022
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="h-section-gap"></div>
      </main>
    </div>
  );
};

export default Home;