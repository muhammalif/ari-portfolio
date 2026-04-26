import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation = ({ isDarkMode, toggleDarkMode }: NavigationProps) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const getLinkClass = (path: string) => {
    const baseClass =
      "font-sans text-xs tracking-widest font-label-caps transition-colors duration-300";
    if (location.pathname === path) {
      return `${baseClass} text-neutral-900 dark:text-white border-b-2 border-orange-700 pb-1`;
    }
    return `${baseClass} text-neutral-500 dark:text-neutral-400 hover:text-orange-700`;
  };

  const menuLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "WORK", path: "/work" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-none transition-all duration-300">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-6 md:px-8 h-20">
        <Link
          to="/"
          className="text-xl md:text-2xl font-serif text-neutral-900 dark:text-neutral-50 tracking-tighter cursor-pointer z-50 flex items-center gap-1 group"
        >
          <span className="font-bold">Ari Septian Fauzi</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-serif font-medium tracking-tight">
          {menuLinks.map((link) => (
            <Link key={link.path} to={link.path} className={getLinkClass(link.path)}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 z-50">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="text-neutral-900 dark:text-neutral-50 hover:text-orange-700 transition-colors duration-300 flex items-center justify-center p-2"
          >
            <span className="material-symbols-outlined">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden text-neutral-900 dark:text-neutral-50 p-2"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[300px] bg-white dark:bg-neutral-950 z-[101] shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-neutral-100 dark:border-neutral-900">
            <span className="font-serif italic text-lg opacity-50">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-900 dark:text-neutral-50 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined !text-2xl">close</span>
            </button>
          </div>

          <div className="flex flex-col gap-6 px-8 pt-12">
            {menuLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  transitionDelay: isMenuOpen ? `${100 + index * 50}ms` : '0ms',
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: isMenuOpen ? 1 : 0
                }}
                className={`text-3xl font-headline-md transition-all duration-500 ease-out ${location.pathname === link.path
                  ? "text-secondary dark:text-orange-400"
                  : "text-neutral-900 dark:text-neutral-100"
                  }`}
              >
                {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
              </Link>
            ))}
          </div>

          <div className="mt-auto p-8 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/50">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase font-semibold">Get in touch</span>
                <a href="mailto:ari@example.com" className="text-sm font-medium hover:text-secondary transition-colors">ari.septian@email.com</a>
              </div>
              <div className="pt-4 text-[10px] tracking-[0.2em] text-neutral-400 uppercase font-medium">
                © 2026 ARI SEPTIAN FAUZI
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;