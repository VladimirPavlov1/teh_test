import PresentCard from "PresentCard/PresentCard";
import InfoCard from "InfoCard/InfoCard";
import { Item, SeparLine,AvatarWrapper } from "./CardItem.styled";
import avatar_temp from 'images/Avatar@1x.png'


const CardItem = ({user,tweets,followers,avatar,id}) => {
    console.log(user)
    return (
        <Item>
            <PresentCard/>
            <SeparLine/>
            <AvatarWrapper>
                <img src={avatar_temp} alt="user-avatar" />
            </AvatarWrapper>
            <InfoCard tweets={tweets} followers={followers}/>
          
        </Item>
            
    );
}

export default CardItem;