// src/components/Header.jsx
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner">
        {/* Left: Brand */}
        <a href="#top" className="site-header__brand">
          PETRIE&nbsp;DE&nbsp;WIT
        </a>

        {/* Right: Contact Button */}
        <a href="#contact" className="site-header__contact-btn">
          Contact
        </a>
      </div>
    </header>
  );
}
