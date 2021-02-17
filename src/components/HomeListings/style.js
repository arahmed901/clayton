import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;

  button {
    display: block;
    margin: auto;
    font-size: 1.1rem;
    padding: 0.9rem;
    width: 18rem;

    @media screen and (max-width: 500px) {
      width: 100%;
      padding: 1.3rem;
      font-size: 1.2rem;
    }
  }
`;

export const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Counter = styled.p`
  font-weight: 400;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;

  label {
    text-transform: uppercase;
    margin-right: 1rem;
    font-size: 0.7rem;
  }
`;

export const CardsContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2rem;
  margin-top: 2.2rem;
  margin-bottom: 2rem;

  .home-listing-card {
    height: 21rem;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;
