const Footer = () => (
  <footer className="w-full mt-32 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto px-6 md:px-8 py-12 gap-6">
      <div className="text-xl font-serif text-neutral-900 dark:text-neutral-50 tracking-tighter flex items-center gap-1">
        <span className="font-bold">ARI.</span>
        <span className="opacity-50 font-light italic">STUDIO</span>
      </div>
      <div className="flex items-center gap-8">
        <a
          href="https://www.instagram.com/arfauzisptn?igsh=YmsyMTN6ZmhrbWJl"
          className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-sans text-[10px] tracking-widest font-medium uppercase"
        >
          INSTAGRAM
        </a>
        <a
          href="https://www.linkedin.com/in/ari-septian-fauzi-951501172?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-sans text-[10px] tracking-widest font-medium uppercase"
        >
          LINKEDIN
        </a>
      </div>
      <div className="text-neutral-900 dark:text-neutral-50 font-sans text-[10px] tracking-widest font-medium uppercase">
        © 2026 ARI SEPTIAN FAUZI. ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
);

export default Footer;