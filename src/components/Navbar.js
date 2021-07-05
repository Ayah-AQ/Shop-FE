import { signup,signin,signout } from "../store/actions/authActions";
import { Logo,NavItem, ThemeButton } from "./navStyle";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const NavBar = ({ currentTheme, ToggleCurrentTheme }) => {
  const user = useSelector((state) => state.users.user);
// console.log(user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignout = () => {
    dispatch(signout());
    history.replace("/");
  };

  return (
   <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? "https://wallpapercave.com/wp/wp5159053.jpg" :"https://wallpapercave.com/wp/wp5146985.jpg"} alt="logo" />
      </Logo>  
      <div className="navbar-nav ml-auto">
        

        {user && (
          <>
         <p style={{ padding: "0.25em 1em", whiteSpace: "nowrap" }}>
            Hello, {user.firstName}😍
        </p>
        <NavItem to="/shops">Shops</NavItem>
        <NavItem to="/products">Products</NavItem>
        <ThemeButton onClick={handleSignout}>Sign out</ThemeButton>
        </>)}
        {!user && 
          <>
          <Link to="/signin">
            <ThemeButton>Sign in</ThemeButton>
          </Link>
          <Link to="/signup">
            <ThemeButton>Sign up</ThemeButton>
          </Link>
          </>
        }
      
        <ThemeButton className="nav-item" onClick={ToggleCurrentTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  )};

export default NavBar;