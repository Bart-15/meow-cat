import React, {useState} from 'react'
import SearchBar from '../components/SearchBar/SearchBar';
import {Container, Grid} from '@mui/material';
import {CatContainer} from '../components/Cats/styledCats'
import Pagination from '../components/Pagination/Pagination'
import CardSekeleton from '../components/Cats/CardSekeleton';
import CardCats from '../components/Cats/CardCats';
import useFetch from '../hooks/useFetch';
import usePagination from '../hooks/usePagination';
const Search = () => {

  const {data, query, setQuery, queryResult, isLoading, setLoading, searchCat} = useFetch();

  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE)


  const changePage = (e, p) => {
    setLoading(true);
    setPage(p);
    setTimeout(() => {
      _DATA.jump(p);
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
      setLoading(false);
    }, 1000)
  } 

  // get current posts
  // custom pagination
  // console.log("######", data)
  // const lastIndex = currentPage * catsPerPage ;
  // const firstIndex = lastIndex - catsPerPage;
  // const newCats = data?.slice(firstIndex, lastIndex);         
  
  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
        queryResult={queryResult}
        searchCat={searchCat}
      />
      <Container>
        {(_DATA.currentData() < 0 || isLoading) ? (<CardSekeleton cards={6} />) : (
          <CatContainer>
            <Grid container spacing={2}>
              {_DATA.currentData().map((item, index) => (<CardCats result={item} key={item.key} />))}
            </Grid>
          </CatContainer>
        )}
        <Pagination page={page} count={count} changePage={changePage}/>
      </Container>
    </>
  )
}

export default Search