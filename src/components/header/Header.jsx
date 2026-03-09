import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Link to={"/login"} className="header-login">
        تسجيل الدخول
        <i className="bi bi-person-fill"></i>
      </Link>
      <div className="top-header container">
        <div className="top-header-menu" onClick={() => setOpen(true)}>
          <i className="bi bi-list"></i>
        </div>

        <Link to={"/"} className="top-header-logo">
          <i className="bi bi-basket2"></i>
          بغداد شاب
        </Link>

        <div className="top-header-text">اهلا و سهلا بكم</div>

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
          سله التسوق
          <i className="bi bi-cart3"></i>
        </Link>
      </div>
      <nav className={`navbar ${open ? "open" : ""}  container`}>
        <div onClick={() => setOpen(false)} className="navbar-close-icon">
          <i className="bi bi-x-lg"></i>
        </div>
        <div className="navbar-links">
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
