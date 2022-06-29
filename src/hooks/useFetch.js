import {useState, useEffect} from 'react';
import useDebounce from './useDebounce'
import * as cat from '../api/cat';
import { useNavigate } from "react-router-dom";

const useFetch = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [error, setErrors] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const debounceQuery = useDebounce(query, 1000)
    const [queryResult, setQueryResult] = useState([]);
    
    const url = process.env.REACT_APP_BASE_URL;

    // fetch all cat breeds
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await cat.getByBreeds(`${url}/breeds`);

            if(res.status === 500) {
                return setErrors({message: "Check internet connection"});
            }

            setData(res.data);
            setLoading(false)

        }catch(e) {
            setErrors(e.message);
        }
    }

    useEffect(() => {
        fetchData();
    },  [])
    
    
    // searchQuery {todo: 'implement debounce :)'}
    const fetchQuery = async () => {
        try {

            const res = await cat.getByBreeds(`${url}/breeds/search?q=${debounceQuery}`);

            if(res.status === 500) {
                return setErrors({message: "Check internet connection"});
            }

            setQueryResult(res.data);
            console.log(res.data)
        }catch(e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        if(debounceQuery.length > 2) {
            fetchQuery();
         } 
    }, [debounceQuery])
    

    // searchCat
    const searchCat = async (e, v) => {
       const value = v ? v.name.toLowerCase() : "";
        
       try {

        // if(!value) {
        //     return fetchData();
        // }

        // const res = await cat.getByBreeds(`${url}/breeds/search?q=${value}&limit=100`);
        // console.log("####data", res.data)

       return navigate("./cat")
       }catch(e) {
        console.log(e.message)
       }
    }

    return {
       data,
       error,
       isLoading,
       query,
       setQuery,
       searchCat,
       queryResult,
       setLoading
    }
}

export default useFetch;