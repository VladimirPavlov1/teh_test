import { Container } from 'App.styled';
import './App.css';
import users from 'users.json'
import CardList from 'CardList/CardList';

function App() {
  return (
    <Container>
      <CardList users={users}/>
    </Container>
  );
}

export default App;
