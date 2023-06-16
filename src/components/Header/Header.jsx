import { ReactComponent as LogoGoit } from 'images/logo_1x.svg'
import { Link, HeaderWrapper, LogoHeader} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
     <LogoHeader>
        <LogoGoit/>
     </LogoHeader>
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
