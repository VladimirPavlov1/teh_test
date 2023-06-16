import { Wrapper,Text,Btn } from "./InfoCard.styled";
import { useState } from "react";

const InfoCard = ({tweets,followers}) => {

    const [btnTitle, setBtnTitle] = useState('follow')
    const [followersCounter,setFollowersCounter]=useState(followers||0);
    const [active, setActive] = useState(false)
    const handleClick = ()=>{
       switch(btnTitle){
        case 'follow':
            setBtnTitle('following');
            setActive(true);
            setFollowersCounter(prevstate=>prevstate+1)
            break;
        case 'following':
            setBtnTitle('follow');
            setActive(false);
            setFollowersCounter(prevstate=>prevstate-1)
            break;
        default:  return 'follow';
       }
    }

    return (
        <Wrapper>
            <Text>{tweets} TWEETS</Text>
            <Text>{followersCounter} FOLLOWERS</Text>
            <Btn onClick={()=>handleClick()} active={active}>{btnTitle}</Btn>
        </Wrapper>
    );
}

export default InfoCard;