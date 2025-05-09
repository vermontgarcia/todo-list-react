import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div>
        <div className="logo-container">
          <a href="/">
            <img
              className="logo"
              src="/images/logo.svg"
              alt="Stock Tracker App Logo"
              width="64"
              height="64"
            />
          </a>
          <div className="logo-name-container">
            <p>WDD430</p>
            <p>ToDo React App</p>
          </div>
        </div>
        <div className="menu-btn">
          <a id="menu-btn" role="button" className="menu-icon">
            <i id="menu-icon" className="material-icons">
              menu
            </i>
          </a>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
