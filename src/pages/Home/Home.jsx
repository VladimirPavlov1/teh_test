import { Main,Title, List, Item, Card } from "./Home.styled";

import tweets1 from "images/tweets1.png";
const Home = () => {
  return (
    <Main>
      <Title>Welcome to Tweets</Title>
      <List>
        <Item>
          <Card src={tweets1} alt=" cards" />
        </Item>
        <li>
          <Card src={tweets1} alt="cards" />
        </li>
        <li>
          <Card src={tweets1} alt="cards" />
        </li>
      </List>
    </Main>
  );
};

export default Home;
