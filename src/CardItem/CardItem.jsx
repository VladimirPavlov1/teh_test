import PresentCard from "PresentCard/PresentCard";
import InfoCard from "InfoCard/InfoCard";
import { Item, SeparLine,AvatarWrapper } from "./CardItem.styled";




const CardItem = ({tweets,followers,avatar}) => {


  const totalTweets = ()=>{
    let result = 0;
    if(tweets){
       result = tweets + 100500;
      return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    return result
  }

  console.log(totalTweets())
    return (
        <Item>
            <PresentCard/>
            <SeparLine/>
            <AvatarWrapper>
                <img src={avatar} alt="user-avatar" />
            </AvatarWrapper>
            <InfoCard tweets={totalTweets()} followers={followers}/>
          
        </Item>
            
    );
}

export default CardItem;