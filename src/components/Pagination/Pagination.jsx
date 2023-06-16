import { Wrapper, Btn } from "./Pagination.styled";

const Pagination = ({ onClick, isLoading, limitItemsOnPage, users }) => {
  return (
    <Wrapper>
      {!(users.length - limitItemsOnPage === 0) && (
        <Btn onClick={() => onClick()} isLoading={isLoading}>
          Load More
        </Btn>
      )}
    </Wrapper>
  );
};

export default Pagination;
