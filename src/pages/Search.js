import React, {useState} from 'react'
import {Container, Grid} from '@mui/material';
import {CatContainer} from '../components/Cats/styledCats'
import Pagination from '../components/Pagination/Pagination'
import CardSekeleton from '../components/Skeletons/CardSekeleton';
import CardCats from '../components/Cats/CardCats';
import useFetch from '../hooks/useFetch';
import usePagination from '../hooks/usePagination';
import Navbar from '../components/Navbar/Navbar';
const Search = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const {data, isLoading, setLoading} = useFetch(`${BASE_URL}/breeds`);

  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE)

  const changePage = (e, p) => {
    setLoading(true);
    setPage(p);
    _DATA.jump(p);
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  } 

  return (
    <>
      <Navbar />
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