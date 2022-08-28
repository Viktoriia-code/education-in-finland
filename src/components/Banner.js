import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import useResizeObserver from "use-resize-observer";
import styled from 'styled-components';
import '../assets/fonts/FrederickatheGreat-Regular.ttf';

const BannerStyles = styled.div`
    .rsis-container > div {
        background-position: center;
        position: relative;
    }
    .rsis-container {
        opacity: 85%;
    }
    #banner-title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-family: 'Calistoga', sans-serif;
        font-size: 40px;
    }
`;

const images = [
    { url: "images/Finland_Helsinki_Lahti.jpg" },
    { url: "images/Finland-Aalto-university.jpg" },
    { url: "images/Finland-bikes.jpg" },
    { url: "images/Finland-Porvoo.jpg" },
    { url: "images/Finland-school.jpg" },
    { url: "images/Finlang-Helsinki-Tram.jpg" },
    { url: "images/nature.jpg" },
  ];

export default function Banner() {
    const { ref, width = 1 } = useResizeObserver();
  return (
    <BannerStyles ref={ref} style={{ width: "100vw" }}>
        <SimpleImageSlider
        width={width}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
        slideDuration={5}
        autoPlayDelay={15}
      />
    <div id='banner-title'>
        <h2>Education in Finland</h2>
        <hr />
    </div>
    </BannerStyles>
  )
}
