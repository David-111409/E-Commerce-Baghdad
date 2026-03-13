import { Link } from "react-router-dom";
import "./header.css";
import { useState, useEffect, useRef } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  const closeLink = (e) => e.target.classList.contains("navbar-link") && setOpen(false);

  const openMenu = () => {
    setOpen(true);
  };

  function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    setIsDark(!isDark);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && open) setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header>
      <Link to={"/login"} className="header-login">
        تسجيل الدخول
        <i className="bi bi-person-fill"></i>
      </Link>
      <div className="top-header container">
        <div className="top-header-menu" onClick={openMenu}>
          <i className="bi bi-list"></i>
        </div>

        <Link to={"/"} className="top-header-logo">
          <button onClick={toggleTheme} className="theme-toggle">
            {isDark ? (
              <>
                <i className="bi bi-sun-fill"></i> الوضع الفاتح
              </>
            ) : (
              <>
                <i className="bi bi-moon-fill"></i> الوضع الداكن
              </>
            )}
          </button>
          <i className="bi bi-basket2"></i>
          بغداد شاب
        </Link>

        <div className="top-header-text">أهلاً و سهلاً بكم</div>

        <div className="top-header-phone">
          123-456-789
          <i className="bi bi-telephone"></i>
        </div>
      </div>

      <div className="middle-header container">
        <div className="middle-header-search-box">
          <input type="search" placeholder="ماذا ترید؟" />
          <button className="search-box-btn">ابحث</button>
        </div>

        <Link to="/cart" className="middle-header-shopping-cart">
          سلة التسوق
          <i className="bi bi-cart3"></i>
          <div className="cart-notification">1</div>
        </Link>
      </div>
      <nav className={`navbar ${open ? "open" : ""}  container`} ref={navRef}>
        <div onClick={() => setOpen(false)} className="navbar-close-icon">
          <i className="bi bi-x-lg"></i>
        </div>
        <div className="navbar-links" onClick={closeLink}>
          <Link to="/" className="navbar-link">
            الصفحه الرئیسیه
          </Link>

          <Link to="/products" className="navbar-link">
            الإلكترونيات و الموبايلات
          </Link>

          <Link className="navbar-link">المنزل و المطبخ</Link>
          <Link className="navbar-link">رجاليه</Link>
          <Link className="navbar-link">نسائیه</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
