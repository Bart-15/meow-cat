import {useState, useEffect} from 'react';
import * as cat from '../api/cat';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setErrors] = useState(null);
    const [isLoading, setLoading] = useState(false);

    // fetch all cat breeds
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await cat.getByBreeds(url);

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
    


    return {
       data,
       error,
       isLoading,
       setLoading
    }
}

export default useFetch;