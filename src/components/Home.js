import React from 'react';

import HeroImage from 'components/Hero';
import SearchBar from 'components/SearchBar';
import MovieGrid from 'components/MovieGrid';
import MovieThumb from 'components/MovieThumb';
import LoadMoreBtn from 'components/Button';
import Spinner from 'components/Load';

import { useHomeFetch} from 'hooks/useHomeFetch';

const Home = () => {
    
    const [{ movies, error, loading, errMessage }, getMovies ] = useHomeFetch();



    if(!loading) {
        return (
            <React.Fragment>
                <HeroImage />
                <SearchBar />
                <MovieGrid />
                <MovieThumb />
                <LoadMoreBtn />
            </React.Fragment>
        )
    } else {
        return <Spinner />
    }
    
}
export default Home;