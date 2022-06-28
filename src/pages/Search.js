import React, {useState} from 'react'
import SearchBar from '../components/SearchBar/SearchBar';
import {Container, Grid} from '@mui/material';
import {CatContainer} from '../components/Cats/styledCats'
import Pagination from '../components/Pagination/Pagination'
import CardSekeleton from '../components/Cats/CardSekeleton';
import CardCats from '../components/Cats/CardCats';
import useFetch from '../hooks/useFetch';
const Search = () => {

  const {data, query, setQuery, queryResult, isLoading, searchCat} = useFetch();

  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage, setCatsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const changePage = (value) => {
    setCurrentPage(value)
  } 

  // get current posts
  // custom pagination
  const lastIndex = currentPage * catsPerPage;
  const firstIndex = lastIndex - catsPerPage;
  const newCats = data.slice(firstIndex, lastIndex);



  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
        queryResult={queryResult}
        searchCat={searchCat}
      />
      <Container>
        {(data === undefined || isLoading) ? (<CardSekeleton cards={6} />) : (
          <CatContainer>
            <Grid container spacing={2}>
              {newCats.map((item) =>  (<CardCats result={item} />))}
            </Grid>
          </CatContainer>
        )}
        <Pagination catsPerPage={catsPerPage} totalCats={data.length} changePage={changePage}/>
      </Container>
    </>
  )
}

export default Search