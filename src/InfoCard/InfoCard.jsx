import { Wrapper,Text,Btn } from "./InfoCard.styled";
import { useState } from "react";

const InfoCard = ({tweets,followers}) => {

    const [btnTitle, setBtnTitle] = useState('follow')
    const [tweetsCounter,setTweetsCounter]=useState(tweets||0);
    const [active, setActive] = useState(false)
    const handleClick = ()=>{
       switch(btnTitle){
        case 'follow':
            setBtnTitle('following');
            setActive(true);
            break;
        case 'following':
            setBtnTitle('follow');
            setActive(false);
            break;
        default:  return 'follow';
       }
    }

    return (
        <Wrapper>
            <Text>{tweetsCounter} TWEETS</Text>
            <Text>{followers} FOLLOWERS</Text>
            <Btn onClick={()=>handleClick()} active={active}>{btnTitle}</Btn>
        </Wrapper>
    );
}

export default InfoCard;