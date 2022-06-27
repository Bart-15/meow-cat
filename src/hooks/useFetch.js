import {useState, useEffect} from 'react';
import * as cat from '../api/cat';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [error, setErrors] = useState(null);
    const [isLoading, setLoading] = useState(null)

    const url = process.env.BASE_URL;
    
    const fetchData = async (url) => {
        try {
            const res = await cat.getByBreeds(url);

            if(res.status === 500) {
                return setErrors({message: "Check internet connection"});
            }

            setData(res.data);
        }catch(e) {
            setErrors(e.message);
        }
    }

    useEffect(() => {
        fetchData(url);
    },  [])

    return {
        //some data
    }
}

export default useEffect;