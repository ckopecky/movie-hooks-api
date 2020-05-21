import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    width: 100%;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledRMDBLogo = styled.h1`
  width: 30%;
  margin-top: 20px;
  color: white;
  font-family: 'Abel';

  @media screen and (max-width: 500px) {
    width: 70%;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 10%;
  

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;
