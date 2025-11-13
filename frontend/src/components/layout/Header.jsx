import React, { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { ImArrowUpRight2 } from "react-icons/im";
import Logo from "../../assets/Crop_Main_Logo.png";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [pagesOpenMobile, setPagesOpenMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // close panel on outside click or ESC
  useEffect(() => {
    const onDocClick = (e) => {
      if (desktopMenuOpen) {
        if (
          panelRef.current &&
          !panelRef.current.contains(e.target) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(e.target)
        ) {
          setDesktopMenuOpen(false);
        }
      }
    };
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setDesktopMenuOpen(false);
        setMobileOpen(false);
        setPagesOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [desktopMenuOpen]);

  const mainFour = [
    { id: "home", title: "Home", link: "/" },
    { id: "studio", title: "Studio", link: "/studio" },
    { id: "work", title: "Work", link: "/work" },
    { id: "news", title: "News", link: "/news" },
  ];

  const otherItems = [
    { id: "portfolio", title: "Portfolio", link: "/portfolio" },
    { id: "blogs", title: "Blogs", link: "/blogs" },
    { id: "contact", title: "ContactUS", link: "/contact" },
  ];

  const pages = [
    { id: "about", title: "About us", link: "/about" },
    { id: "our-services", title: "Our Services", link: "/services" },
    { id: "service-details", title: "Service Details", link: "/service-details" },
    { id: "team", title: "Our Team", link: "/team" },
    { id: "pricing", title: "Pricing", link: "/pricing" },
    { id: "faqs", title: "FAQs", link: "/faqs" },
  ];

  const handleMenuToggle = () => {
    if (isDesktop) {
      setDesktopMenuOpen((s) => !s);
      setMobileOpen(false);
    } else {
      setMobileOpen((s) => !s);
      setDesktopMenuOpen(false);
    }
  };

  const closeAll = () => {
    setMobileOpen(false);
    setDesktopMenuOpen(false);
    setPagesOpenMobile(false);
  };

  // const location = useLocation();
  const currentPath = window.location.pathname;



  return (
    <header className="relative w-full bg-[#1c1c1c] z-50">
      <nav className="w-full">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between text-white">
          {/* LEFT: logo + main links */}
          <div className="flex items-center gap-8">
            <a href="/" aria-label="Homepage" className="flex items-center">
              <img src={Logo} alt="Logo" className="h-11 w-auto" />
            </a>

            <ul className="hidden md:flex items-center gap-3 text-gray-200">
              {mainFour.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={closeAll}
                    className={`inline-block py-1 px-3 font-semibold ${currentPath === item.link ? "text-yellow-400" : "hover:text-yellow-400 text-gray-200"
                      }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: start project + menu */}
          <div className="flex items-center gap-6">
            <a
              href="/start-project"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 text-sm font-semibold hover:bg-gray-800"
            >
              Start Project <ImArrowUpRight2 />
            </a>

            <div className="relative">
              <button
                ref={menuButtonRef}
                onClick={handleMenuToggle}
                className="p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 z-50"
                aria-label="Open menu"
                aria-expanded={isDesktop ? desktopMenuOpen : mobileOpen}
              >
                {isDesktop ? (
                  desktopMenuOpen ? (
                    <HiX className="w-6 h-6 text-white" />
                  ) : (
                    <HiMenu className="w-6 h-6 text-white" />
                  )
                ) : mobileOpen ? (
                  <HiX className="w-6 h-6 text-white" />
                ) : (
                  <HiMenu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* left-bottom gradient accent */}
        <div
          aria-hidden
          className="absolute left-0 bottom-0 h-3 w-56 pointer-events-none rounded-t-md"
          style={{
            background:
              "linear-gradient(90deg, #24211d 0%, rgba(36,33,29,0.6) 40%, rgba(36,33,29,0.15) 70%, transparent 100%)",
          }}
        />
      </nav>

      {/* DESKTOP: fixed panel box (overlay) — appears outside navbar space, anchored top-right */}
      {isDesktop && desktopMenuOpen && (
        <div
          ref={panelRef}
          className="fixed right-6 top-16 z-50 w-[760px] max-w-[90vw] rounded-lg bg-[#1c1c1c] border border-gray-700 shadow-2xl p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Grid: pages | other items */}
          <div className="grid grid-cols-2 gap-6 text-gray-200">
            <div>
              <h3 className="text-sm font-semibold mb-3">Pages</h3>
              <div className="grid gap-1">
                {pages.map((p) => (
                  <a
                    key={p.id}
                    href={p.link}
                    onClick={() => setDesktopMenuOpen(false)}
                    className="block py-2 px-2 rounded hover:bg-gray-800 text-sm"
                  >
                    {p.title}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">More</h3>
              <div className="grid gap-1">
                {otherItems.map((it) => (
                  <a
                    key={it.id}
                    href={it.link}
                    onClick={() => setDesktopMenuOpen(false)}
                    className="block py-2 px-2 rounded hover:bg-gray-800 text-sm"
                  >
                    {it.title}
                  </a>
                ))}
                <a
                  href="/start-project"
                  onClick={() => setDesktopMenuOpen(false)}
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded bg-[#111111] text-white font-semibold hover:bg-black"
                >
                  Start Project <ImArrowUpRight2 />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE full sheet (unchanged) */}
      {mobileOpen && (
        <div
          className="md:hidden bg-[#1c1c1c] shadow-md border-t border-gray-800 z-40"
          style={{ maxHeight: "70vh", overflowY: "auto" }}
        >
          <ul className="flex flex-col px-4 py-4 gap-1 text-gray-200">
            {mainFour.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={closeAll}
                  className="block py-2 px-2 rounded hover:bg-gray-800 font-medium"
                >
                  {item.title}
                </a>
              </li>
            ))}

            <li className="mt-1 border-t border-gray-700" />

            <li>
              <button
                className="w-full flex items-center justify-between py-2 px-2 rounded hover:bg-gray-800 font-medium"
                onClick={() => setPagesOpenMobile((s) => !s)}
                aria-expanded={pagesOpenMobile}
              >
                <span>Pages</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${pagesOpenMobile ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {pagesOpenMobile && (
                <ul className="mt-1 pl-4 flex flex-col gap-1">
                  {pages.map((p) => (
                    <li key={p.id}>
                      <a href={p.link} onClick={closeAll} className="block py-2 px-2 rounded hover:bg-gray-800 font-medium">
                        {p.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="mt-1 border-t border-gray-700" />

            {otherItems.map((it) => (
              <li key={it.id}>
                <a href={it.link} onClick={closeAll} className="block py-2 px-2 rounded hover:bg-gray-800 font-medium">
                  {it.title}
                </a>
              </li>
            ))}

            <li className="mt-3 px-4">
              <a href="/start-project" onClick={closeAll} className="block w-full py-2 px-2 rounded bg-black text-white text-center font-semibold">
                Start Project <ImArrowUpRight2 className="inline-block ml-2" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
