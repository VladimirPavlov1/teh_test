import { Container } from 'App.styled';
import './App.css';
import CardList from 'CardList/CardList';
import {useState,useEffect} from 'react'
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage]=useState(3);
  const [error, setError] = useState('')

  useEffect(() => {
  const fetchUsers=async()=>{
    try {
      setIsLoading(true);
      const response=await axios.get('https://6409875d6ecd4f9e18b35e8e.mockapi.io/users');
      setUsers([...response.data])
    } catch (error) {
      setError(error.mesage)
    }
    finally{
      setIsLoading(false)
    }
  
  }
  fetchUsers()
  }, [])

  return (
    <Container>
      <CardList users={users}/>
    </Container>
  );
}

export default App;
