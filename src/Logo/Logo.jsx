import { LogoWrapper } from "./Logo.styled";
import { ReactComponent as LogoGoit } from 'images/logo_1x.svg'


const Logo = () => {
  return (
    <LogoWrapper>
      <LogoGoit />
    </LogoWrapper>
  );
};

export default Logo;
