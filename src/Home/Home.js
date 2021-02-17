import React from 'react';
import { Helmet } from 'react-helmet';
import { HomeStyles } from './Home.styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeListings from '../components/HomeListings';

const Home = () => {

  return (
      <HomeStyles>
        <Helmet>
            <title>Clayton Homes - Home</title>
            <meta name="description" content="TODO: Your Page Description" />
        </Helmet>
        <Header />
        <HomeListings />
        <Footer />
      </HomeStyles>
  )
};

export default Home;
