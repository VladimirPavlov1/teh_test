import  Container from "../../components/Container/Container"
import CardList from 'components/CardList/CardList';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';

const Tweets = ()=> {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://6409875d6ecd4f9e18b35e8e.mockapi.io/users');
        setUsers([...response.data])
      } catch (error) {
        setError(error.mesage)
      }
      finally {
        setIsLoading(false)
      }

    }
    fetchUsers()
  }, [])



  const [currentPage] =useState(1);
  const [limitItemsOnPage,setLimitItemsOnPage]=useState(3);
  
  const lastPageIndex = currentPage * limitItemsOnPage;
  const firstPageIndex = lastPageIndex - limitItemsOnPage;
  const quantityItemsOnPage = users.slice(firstPageIndex,lastPageIndex)

  const handleClick=()=>{
    setLimitItemsOnPage(prevState=>prevState+3)
  }

  console.log(limitItemsOnPage)
  return (
    <Container>

      {isLoading && <Loader />}
      {error && <p>Щось пішло не так, спробуй ще раз...</p>}
      {users && (
        <>
          <CardList users={quantityItemsOnPage} />
          <Pagination  
          onClick={handleClick} 
          isLoading={isLoading} 
          limitItemsOnPage={limitItemsOnPage}
          users={users}
          />
        </>
      )}
    </Container>
  );
}

export default Tweets;
