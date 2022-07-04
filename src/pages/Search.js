import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import * as api from '../api/cat';
import {Container, Grid, Typography} from '@mui/material';
import {Pagination, CardSekeleton, CardCats, SearchBar} from '../components'
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';
import usePagination from '../hooks/usePagination';
import useStyles from '../components/Cats/styles';

const Search = () => {
  
  const classes = useStyles();
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {data, isLoading, setLoading} = useFetch(`${BASE_URL}/breeds`);
  // paginaton 
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);
  
  // search using debounce
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    const searchQuery = async() => {
      const name = debounceQuery.toLowerCase();
      try {
        const res = await api.getByBreeds(`${BASE_URL}/breeds/search?q=${name}`);
        setQueryResult(res.data)
      }catch(e) {
        console.log(e.message);
      }
      
    }

    if(debounceQuery.length > 2) {
      searchQuery();
    }

    // return () => {
    //   mounted.current = true;
    // }
  }, [debounceQuery])


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

  const searchCat = (e, value) => {
    const {id} = value;   
    navigate(`/search/cat/${id}`);
  }


  return (
    <>
      <SearchBar  
        query={query}
        setQuery={setQuery}
        queryResult={queryResult}
        searchCat={searchCat}
      />
      <Container>
        {(_DATA.currentData() > 0 || isLoading) ? (<CardSekeleton cards={6} />) : (
          <Container className={classes.cardContainer}>
            <Grid container spacing={2}>
              {_DATA.currentData().map((item, index) => (<CardCats result={item} key={item.key} />))}
            </Grid>
          </Container>
        )}
        {(_DATA.currentData().length < 0 && !isLoading) && (<Typography>Data not available.</Typography>)}
        <Pagination page={page} count={count} changePage={changePage}/>
      </Container>
    </>
  )
}

export default Search