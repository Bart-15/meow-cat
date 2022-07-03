import {useState, useEffect, useRef} from 'react';
import * as cat from '../api/cat';

const useFetch = (url) => {
    const mounted = useRef(false)
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
                errors.message = "Data not available right now."
                setErrors(errors)
            }
      
            setLoading(false)
            setData(res.data);
        }catch(e) {
            setErrors(e.message);
        }
    }

    useEffect(() => {
        if(!mounted.current) {
            fetchData();
        }

        // cleanup 
        return () => {
            mounted.current = true;
        }

    },[])
    


    return {
       data,
       errors,
       isLoading,
       setLoading,
       setData
    }
}

export default useFetch;