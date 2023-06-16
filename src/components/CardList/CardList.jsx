import CardItem from "components/CardItem/CardItem";
import { List } from "./CardList.styled";

const CardList = ({users}) => {
    return (
       <List>
        {users.map(user=>
            <CardItem key={user.id} {...user}/>
            )}
       </List>
        
    );
}

export default CardList;