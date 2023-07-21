import React from "react";
import Image from "next/image";
import assorted from "../../../public/assorted.png";
import styled from "styled-components";
const Carousel = () => {
  return <CarouselStyled>Carousel</CarouselStyled>;
};

const CarouselStyled = styled.div`
  .card {
    border: none;
    border-radius: 0;
    box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  }
  .carousel-inner {
    padding: 1em;
  }
  .carousel-control-prev,
  .carousel-control-next {
    background-color: #e1e1e1;
    width: 6vh;
    height: 6vh;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
  .carousel-control-prev span,
  .carousel-control-next span {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media screen and (min-width: 577px) {
    .cards-wrapper {
      display: flex;
    }
    .card {
      margin: 0 0.5em;
      width: calc(100% / 2);
    }
    .image-wrapper {
      height: 20vw;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 576px) {
    .card:not(:first-child) {
      display: none;
    }
  }

  .image-wrapper img {
    max-width: 100%;
    max-height: 100%;
  }

  .cardParent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .card {
    border: 0.125rem solid #3c3ce9;
    border-radius: 0.625rem;
    width: 18.75rem;
    overflow: hidden;
    margin: 0.625rem;
  }

  .prodImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .prodName {
    font-size: 2rem;
    font-weight: 800;
  }
  .prodDesc {
    padding: 1rem;
  }

  .categoryContainer {
    font-size: 1.25rem;
    font-weight: 400;
    background-color: #3c3ce9;
    width: max-content;
    padding: 1%;
    border-radius: 0.21rem;
  }
`;

export default Carousel;
