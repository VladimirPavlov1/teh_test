
import { Wrapper,Text,Btn } from "./InfoCard.styled";
import { useEffect, useState } from "react";

const InfoCard = ({tweets,followers,id}) => {

    const [btnTitle, setBtnTitle] = useState('follow')
    const [followersCounter,setFollowersCounter]=useState(followers||0);
    const [active, setActive] = useState(false)

    useEffect(() => {
       const data=JSON.parse(localStorage.getItem(id));
      if(!data){return}
      setBtnTitle(data.btnTitle);
      setActive(data.active);
      setFollowersCounter(data.followersCounter);
    }, [id])

    const handleClick = (id)=>{
       switch(btnTitle){
        case 'follow':
            setBtnTitle('following');
            setActive(true);
            setFollowersCounter(prevstate=>prevstate+1);
            const obj={btnTitle:btnTitle,active:active, followersCounter:followersCounter};
            const str=JSON.stringify(obj);
            localStorage.setItem(id,str)
            break;
        case 'following':
            setBtnTitle('follow');
            setActive(false);
            setFollowersCounter(prevstate=>prevstate-1)
             const obj1={btnTitle:btnTitle,active:active, followersCounter:followersCounter};
            const str1 =JSON.stringify(obj1);
            localStorage.setItem(id,str1)

            break;
        default:  return 'follow';
       }
    }

    return (
        <Wrapper>
            <Text>{tweets} TWEETS</Text>
            <Text>{followersCounter} FOLLOWERS</Text>
            <Btn onClick={()=>handleClick(id)} active={active} id={id}>{btnTitle}</Btn>
        </Wrapper>
    );
}

export default InfoCard;