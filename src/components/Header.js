import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light header">
      <div className="container-fluid">
        <div className="logo">
          <img className="navbar-brand" src={logo} alt="Auto1"></img>
        </div>

        <div className="collapse navbar-collapse" id="navbar1">
          <ul className="navbar-nav ml-auto">
            <li className="menuContent" role="menuitem">
              <a className="link" herf="/">
                Purchase
              </a>
            </li>
            <li className="menuContent" role="menuitem">
              <a className="link" herf="/">
                My orders
              </a>
            </li>
            <li className="menuContent" role="menuitem">
              <a className="link" herf="/">
                Sell
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    //</header>
  );
};

export default Header;
