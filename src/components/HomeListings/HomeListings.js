import React, { useMemo, useState } from "react";
import {
  Container,
  InfoBar,
  Counter,
  SortContainer,
  CardsContainer,
} from "./style";
import { Select, Button } from "../Common";
import HomeListingCard from "../HomeListingCard";
import listings from "../../data/listings";

const sortValues = {
  ASCENDING: {
    value: "ASCENDING",
    display: "Price: Low to high",
  },
  DESCENDING: {
    value: "DESCENDING",
    display: "Price: High to low",
  },
};

const loadListingInterval = 3;

const animationVariants = {
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export default () => {
  const [width, setWidth] = useState(global.innerWidth);
  const [sort, updateSort] = useState(sortValues.ASCENDING);
  const [loadCount, updateLoadCount] = useState(0);
  const breakpoint = 500;

  const sortedListings = useMemo(() => {
    const sorted = listings.sort((a, b) => {
      if (sort.value === sortValues.ASCENDING.value) {
        return a.startingPrice > b.startingPrice ? 1 : -1;
      } else {
        return a.startingPrice < b.startingPrice ? 1 : -1;
      }
    });

    return sorted;
  }, [sort, listings]);

  const listingsToDisplay = useMemo(() => {
    const totalListingsCount = listings.length;
    const initialLoadCount = width > breakpoint ? 9 : 3;
    const listingsRequested =
      initialLoadCount + loadCount * loadListingInterval;

    return sortedListings.slice(
      0,
      listingsRequested > totalListingsCount
        ? totalListingsCount
        : listingsRequested
    );
  }, [sort, loadCount, sortedListings, listings]);

  const loadMoreListings = () => {
    updateLoadCount((currentLoadCount) => currentLoadCount + 1);
  };

  const onSortToggle = (newVal) => {
    updateSort(sortValues[newVal]);
  };

  return (
    <Container>
      <InfoBar>
        <Counter>{listings.length} homes available</Counter>
        <SortContainer>
          <label htmlFor="sort-toggle">Sort By</label>
          <Select
            onChange={onSortToggle}
            options={Object.values(sortValues)}
            value={sort.value}
            id="sort-toggle"
          />
        </SortContainer>
      </InfoBar>
      <CardsContainer
        variants={animationVariants}
        initial="hidden"
        animate="visible"
      >
        {listingsToDisplay.map((listing, i) => (
          <HomeListingCard
            listingDetails={listing}
            key={`${listing.homeName}-${listing.sqft}-${listing.startingPrice}-container`}
          />
        ))}
      </CardsContainer>
      {listingsToDisplay.length < listings.length && (
        <Button onClick={loadMoreListings}>Load More</Button>
      )}
    </Container>
  );
};
