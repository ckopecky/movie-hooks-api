import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    API_KEY,
    API_URL
} from 'helpers/config';

export const useHomeFetch = () => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ errMessage, setErrorMsg ] = useState('');
    const [ movies, setMovies ] = useState([]);
    
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
    const getMovies = async (url) => {
        setError(false);
        setLoading(true);
        try {
            const result = await axios.get(url);
            if(result) {
                console.log(result.data.results)
                setMovies(result.data.results);
                setLoading(false);
            }
        } catch(error) {
            setError(true);
            setErrorMsg(error.message);
        }
    }

    useEffect(() => {
        getMovies(url);
    }, [])

    console.log(movies);

    return [{ movies, loading, error, errMessage}, getMovies];
}