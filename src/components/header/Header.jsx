import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="top-header">
        <div className="top-header-logo">
          <i className="bi bi-basket2"></i>
          بغداد شاب
        </div>
        <div className="top-header-text">اهلا و سهلا بكم</div>
        <div className="top-header-phone">
          123-456-789
          <i className="bi bi-telephone"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
