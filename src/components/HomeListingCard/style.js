import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  height: 100%;
  width: 100%;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: .2rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  
`

export const ListingInfo = styled.div`
  padding: .3rem .8rem;
  h3 {
    font-weight: 500;
    font-size: 1.1rem;
    margin: 0;
    padding: 0;
  }

  .starting-at-price {
    color: #555;
    font-size: .7rem;
  }

  .listing-details {
    font-size: .8rem;
    font-weight: 500;
    margin-top: .1rem;
  }
  
`
