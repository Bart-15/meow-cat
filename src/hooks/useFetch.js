import {useState, useEffect} from 'react';
import * as cat from '../api/cat';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState({});
    const [isLoading, setLoading] = useState(false);

    // fetch all cat breeds
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await cat.getByBreeds(url);

            // stop if status === 500
            if(res.status === 500) {
                errors.message = "Oooops! Something went wrong"
                return setErrors(errors);
            }
      
            if(res.data.length === 0 ){
                errors.message = "Cat not found."
                setErrors(errors)
            }
      

            setLoading(false)
            setData(res.data);
        }catch(e) {
            setErrors(e.message);
        }
    }

    useEffect(() => {
        fetchData();
    },[])
    


    return {
       data,
       errors,
       isLoading,
       setLoading
    }
}

export default useFetch;