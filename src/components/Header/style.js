import styled from 'styled-components';

const breakpoint = '500px';

export const HeaderContainer = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media screen and (min-width: ${breakpoint}) {
    padding: 1.1rem 1.5rem;
    justify-content: flex-start;
  }
  
`

export const HeaderLogo = styled.img`
  @media screen and (min-width: ${breakpoint}) {
    width: 3.5rem;
  }

  width: 6rem;
`
