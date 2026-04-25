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
      category: "Commercial",
      year: "2025",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777049514/oceanfarm1_rmxqkt.jpg",
    },
    {
      title: "Revitalisasi Stasiun Jakarta Kota",
      category: "Green Roof",
      year: "2025",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777049561/greenroof_fmc5ea.jpg",
    },
    {
      title: "Dikichi Resto",
      category: "Restaurant",
      year: "2025",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777056461/dikichiresto_spxqxz.jpg",
      offset: true,
    },
    {
      title: "D'Look Salon",
      category: "Beauty Bar",
      year: "2025",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777056471/dlooksalon_gkntfr.jpg",
    },
    {
      title: "Mr. O House",
      category: "Residential",
      year: "2025",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777127814/mrohouse_wkjbdc.jpg",
    },
    {
      title: "Rapid-Disaster Relief Shelter",
      category: "Residential",
      year: "2024",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777056164/rapid_q98x08.jpg",
      offset: true,
    },
    {
      title: "Mr. T Office",
      category: "Commercial",
      year: "2024",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777055995/mrtoffice_mednga.jpg",
    },
    {
      title: "Mrs. N House",
      category: "Residential",
      year: "2024",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777127814/mrsnhouse_u7s3zw.jpg",
    },
    {
      title: "Gor Badminton",
      category: "Sports",
      year: "2024",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777127815/gor_wcxhdq.jpg",
    },
    {
      title: "Hotel Butique",
      category: "Residential Hotel",
      year: "2024",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777127815/hotelbutique_c6tiwk.jpg",
    },
    {
      title: "Warehouse Blok MA No. 20 & 21",
      category: "Warehouse",
      year: "2023",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777127816/whblokma_uzryai.jpg",
    },
    {
      title: "Warehouse Blok FC No. 12",
      category: "Warehouse",
      year: "2022",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777127815/whblokfc_ttxbmy.jpg",
    },
    {
      title: "Warehouse Blok EC No. 39 & 40",
      category: "Warehouse",
      year: "2022",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777127815/whblokec_v7emwr.jpg",
    },
    {
      title: "Warehouse Blok GA No. 5 & 6",
      category: "Warehouse",
      year: "2022",
      img: "https://res.cloudinary.com/doz86nkh3/image/upload/v1777127815/whblokga_wrtpjj.jpg",
    },
  ];

  return (
    <main className="pt-32 pb-section-gap flex-grow">
      <header className="max-w-container-max mx-auto px-6 md:px-gutter mb-16 md:mb-24">
        <h1 className="font-display-xl text-4xl md:text-display-xl text-on-surface max-w-4xl dark:text-white">
          Selected Works & Projects
        </h1>
        <div className="w-24 h-0.5 bg-secondary mt-8 dark:bg-orange-400"></div>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-8 max-w-2xl dark:text-neutral-300">
          A curated selection of architectural and exterior & interior design projects exploring spatial
          clarity, natural materials, and contextual relevance.
        </p>
        <div className="mt-12 group/btn">
          <a
            href="/ARI_SEPTIAN_FAUZI_PORTFOLIO_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-neutral-900 text-white font-label-caps text-[11px] tracking-[0.25em] hover:bg-secondary transition-all duration-500 rounded-none dark:bg-white dark:text-black dark:hover:bg-orange-400 relative overflow-hidden group/link shadow-xl md:shadow-none"
          >
            <span className="relative z-10">VIEW FULL PORTFOLIO (PDF)</span>
            <span className="material-symbols-outlined text-[20px] relative z-10 transition-transform duration-500 group-hover/link:translate-y-1">download</span>
            <div className="absolute inset-0 bg-secondary dark:bg-orange-400 translate-y-full group-hover/link:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>
        </div>
      </header>
      <section className="max-w-container-max mx-auto px-6 md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter gap-y-24">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`group border-t border-outline-variant dark:border-neutral-700 pt-6 flex flex-col gap-6 cursor-pointer ${project.offset ? "mt-0 md:mt-24" : ""
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