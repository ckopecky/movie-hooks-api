import React from 'react';
import PropTypes from 'prop-types';
import { StyledSpinner } from 'styles/SpinnerStyle';

const Load = props => {
    return (
        <StyledSpinner>
            Loading...
        </StyledSpinner>
    );
};

Load.propTypes = {
    
};

export default Load;