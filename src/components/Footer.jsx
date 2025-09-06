// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>© {new Date().getFullYear()} Petrie De Wit</div>
        <div className="footer__links">
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
