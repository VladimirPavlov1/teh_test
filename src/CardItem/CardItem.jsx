import PresentCard from "PresentCard/PresentCard";
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
            <div className='InfoCard'>
            <p className='Tweets'>{tweets}</p>
            <p className='Followers'>{followers}</p>
            <button></button>
            </div>
        </Item>
            
    );
}

export default CardItem;