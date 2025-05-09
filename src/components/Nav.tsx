const Nav = () => {
  return (
    <nav className="menu" id="menu">
      <a href="/" className="active">
        Active
      </a>
      <a href="/charts">Completed</a>
      <a href="/news">New</a>
    </nav>
  );
};

export default Nav;
