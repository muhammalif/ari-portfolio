const Footer = () => (
  <footer className="w-full mt-32 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto px-8 py-12 gap-6">
      <div className="text-lg font-serif italic text-neutral-900 dark:text-neutral-50">
        ARCHITECTURA
      </div>
      <div className="flex items-center gap-8">
        <a
          href="#"
          className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-sans text-[10px] tracking-widest font-medium uppercase"
        >
          INSTAGRAM
        </a>
        <a
          href="#"
          className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-sans text-[10px] tracking-widest font-medium uppercase"
        >
          LINKEDIN
        </a>
        <a
          href="#"
          className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-sans text-[10px] tracking-widest font-medium uppercase"
        >
          PRIVACY
        </a>
      </div>
      <div className="text-neutral-900 dark:text-neutral-50 font-sans text-[10px] tracking-widest font-medium uppercase">
        © 2024 ARCHITECTURA. ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
);

export default Footer;