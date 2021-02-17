import React from "react";
import { motion } from "framer-motion";
import { Container, ListingInfo } from "./style";
import unavailable from "../../assets/image-unavailablepng.png";

const animationVariants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        stiffness: 1000,
        velocity: -100,
      },
    },
  },
  hidden: {
    scale: 0.8,
    opacity: 0,
    transition: {
      scale: {
        stiffness: 1000,
      },
    },
  },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
};

export default ({
  listingDetails: {
    imageURL,
    homeName,
    startingPrice,
    beds,
    baths,
    sqft,
    isMultiSection,
  },
}) => {
  return (
    <motion.div
      variants={animationVariants}
      whileHover="hover"
      whileTap="tap"
      positionTransition
      className="home-listing-card"
    >
      <Container>
        <img
          src={imageURL}
          onError={(e) => (e.currentTarget.src = unavailable)}
        />

        <ListingInfo>
          <h3>{homeName}</h3>
          <p className="starting-at-price">
            Starting in the ${startingPrice.toLocaleString()}s
          </p>
          <p className="listing-details">
            {sqft.toLocaleString()} sq. ft, &nbsp;{beds} beds &nbsp;{baths}{" "}
            baths
            {isMultiSection ? " Multi Section" : ""}
          </p>
        </ListingInfo>
      </Container>
    </motion.div>
  );
};
