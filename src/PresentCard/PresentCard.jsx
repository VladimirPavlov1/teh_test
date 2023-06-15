import { Background,PresentImage,Logo} from "./PresentCard.styled";
import { ReactComponent as LogoGoit } from 'images/logo_1x.svg'



const PresentCard = () => {
    return (
    
         <Background>
            <Logo>
                <LogoGoit/>
            </Logo>
            <PresentImage/>
          </Background>
    
    );
}

export default PresentCard;