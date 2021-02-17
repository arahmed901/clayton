import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  font-size: .7rem;

  select {
    color: #444;
    font-weight: 500;
    appearance: none;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    margin: 0;
    width: 100%;
    min-width: 20ch;
    max-width: 26ch;
    font-family: inherit;
    cursor: pointer;
    line-height: 1.1;
    line-height: inherit;
    grid-area: select;
    font-size: inherit;
  }

  &::after {
    content: "";
    width: 0.6em;
    height: 0.4em;
    background-color: #1178BE;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    grid-area: select;
    justify-self: end;
    margin-right: 0.5rem;
  }
  
`
