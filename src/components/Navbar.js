import { NavProduct } from "../style";
import { Logo, NavItem, ThemeButton } from "./navStyle";

const NavBar = ({ currentTheme, ToggleCurrentTheme }) => {


  return (
   <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? "https://wallpapercave.com/wp/wp5159053.jpg" :"https://wallpapercave.com/wp/wp5146985.jpg"} alt="logo" />
      </Logo>
      <div className="navbar-nav ml-auto">
      <NavProduct to="/shops">Shops</NavProduct>
        <NavItem className="nav-item" to="/products">
          Products
        </NavItem>
        <NavItem className="nav-item" to="/List">
          List
        </NavItem>
        <ThemeButton className="nav-item" onClick={ToggleCurrentTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  )};

export default NavBar;