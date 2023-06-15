import CardItem from "CardItem/CardItem";

const CardList = ({users}) => {
    return (
       <ul>
        {users.map(user=>
            <CardItem key={user.id} {...user}/>
            )}
       </ul>
        
    );
}

export default CardList;