import { Link, useLocation } from "react-router-dom";

export interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation = ({ isDarkMode, toggleDarkMode }: NavigationProps) => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const baseClass =
      "font-sans text-xs tracking-widest font-label-caps transition-colors duration-300";
    if (location.pathname === path) {
      return `${baseClass} text-neutral-900 dark:text-white border-b-2 border-orange-700 pb-1`;
    }
    return `${baseClass} text-neutral-500 dark:text-neutral-400 hover:text-orange-700`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-none transition-all duration-300">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-8 h-20">
        <Link
          to="/"
          className="text-2xl font-serif text-neutral-900 dark:text-neutral-50 tracking-tighter cursor-pointer"
        >
          ARCHITECTURA
        </Link>
        <div className="hidden md:flex items-center gap-8 font-serif font-medium tracking-tight">
          <Link to="/" className={getLinkClass("/")}>HOME</Link>
          <Link to="/about" className={getLinkClass("/about")}>ABOUT</Link>
          <Link to="/work" className={getLinkClass("/work")}>WORK</Link>
          <Link to="/contact" className={getLinkClass("/contact")}>CONTACT</Link>
        </div>
        <div className="flex items-center gap-4 text-neutral-900 dark:text-neutral-50">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="hover:text-orange-700 transition-colors duration-300 flex items-center justify-center"
          >
            <span className="material-symbols-outlined">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;