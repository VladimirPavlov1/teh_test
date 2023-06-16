import Logo from "Logo/Logo";
import { Link, HeaderWrapper} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
     <Logo />
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/tweets">Tweets</Link>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
