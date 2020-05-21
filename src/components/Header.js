import React from 'react';
import { StyledHeader, StyledTMDBLogo, StyledRMDBLogo } from 'styles/HeaderStyle';

import TMDBLogo from 'assets/tmdb_logo.svg';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <StyledHeader>
            <div className="header-content">
                <StyledRMDBLogo>{props.name}</StyledRMDBLogo>
                <StyledTMDBLogo src={TMDBLogo} alt="tmdb logo" />
            </div>
        </StyledHeader>
    );
};

Header.propTypes = {
    
};

export default Header;