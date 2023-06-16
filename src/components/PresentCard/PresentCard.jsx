import { Background,PresentImage} from "./PresentCard.styled";
import Logo from "components/Logo/Logo"



const PresentCard = () => {
    return (
        
         <Background>
           <Logo/>
            <PresentImage/>
          </Background>
    
    );
}

export default PresentCard;