import React from 'react';
import { StyledMovieGrid, StyledGridContent } from 'styles/MovieGridStyle'
import PropTypes from 'prop-types';

const MovieGrid = props => {
    return (
        <StyledMovieGrid>
            <StyledGridContent>movie grid</StyledGridContent>
        </StyledMovieGrid>
    );
};

MovieGrid.propTypes = {
    
};

export default MovieGrid;