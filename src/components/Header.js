import { LOGO_url } from "../utils/contants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo url"
          src={LOGO_url}
          
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;