import React, { FC } from "react";
import Slider from "react-slick";
import Gazda from "public/Gazda.png";
import styled from "styled-components";
import { ParagraphMedium, ParagraphSmall } from "components/common/Typography";

const Carousel: FC = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "150px",
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
    dots: true,
    // adaptiveHeight: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <CarouselItemWrapper>
        <CarouselItemImage src={Gazda} />
        <CarouselItemText>
          A very helpful tool to build a new trading strategy or enhance an
          existing one!
        </CarouselItemText>
        <CarouselItemFooter>
          Max Zimin - Co-Founder @ Invento GmbH
        </CarouselItemFooter>
      </CarouselItemWrapper>
      <CarouselItemWrapper>
        <CarouselItemImage src={Gazda} />
        <CarouselItemText>
          A very helpful tool to build a new trading strategy or enhance an
          existing one!
        </CarouselItemText>
        <CarouselItemFooter>
          Max Zimin - Co-Founder @ Invento GmbH
        </CarouselItemFooter>
      </CarouselItemWrapper>
      <CarouselItemWrapper>
        <CarouselItemImage src={Gazda} />
        <CarouselItemText>
          A very helpful tool to build a new trading strategy or enhance an
          existing one!
        </CarouselItemText>
        <CarouselItemFooter>
          Max Zimin - Co-Founder @ Invento GmbH
        </CarouselItemFooter>
      </CarouselItemWrapper>
      <CarouselItemWrapper>
        <CarouselItemImage src={Gazda} />
        <CarouselItemText>
          A very helpful tool to build a new trading strategy or enhance an
          existing one!
        </CarouselItemText>
        <CarouselItemFooter>
          Max Zimin - Co-Founder @ Invento GmbH
        </CarouselItemFooter>
      </CarouselItemWrapper>
      <CarouselItemWrapper>
        <CarouselItemImage src={Gazda} />
        <CarouselItemText>
          A very helpful tool to build a new trading strategy or enhance an
          existing one!
        </CarouselItemText>
        <CarouselItemFooter>
          Max Zimin - Co-Founder @ Invento GmbH
        </CarouselItemFooter>
      </CarouselItemWrapper>
    </Slider>
  );
};

export default Carousel;

const CarouselItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 30px;
  position: relative;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 41.5rem;
  overflow: visible;
  margin-top: 3.5rem;
`;

const CarouselItemText = styled(ParagraphMedium)`
  color: ${({ theme }) => theme.color.gray40};
  flex: 1;
`;

const CarouselItemFooter = styled(ParagraphSmall)`
  color: ${({ theme }) => theme.color.white};
  bottom: 0;
  margin-bottom: 2rem;
`;

const CarouselItemImage = styled.img`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  position: absolute;
  top: -3.5rem;
`;
