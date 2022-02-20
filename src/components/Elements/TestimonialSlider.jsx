import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Melalui BLKEP saya diberi kesempatan untuk meneladani perubahan kehidupan rohani dari Pewarta yang dahulunya seorang yang luka batin terhadap ibunya, beliau membacakan surat kebenciannya pada ibunya yang beliau buat 25 tahun silam, berkat rahmat Tuhan hubungan beliau dengan ibunya dipulihkan dan menjadi sangat dekat."
            author="Anonymous"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Puji Tuhan saya mengalami pemulihan hubungan dengan orang-orang yang pernah melukai saya, membenci saya dan pernah berseteru dengan saya sejak mengikuti pengajaran sesi 2 dalam topik Pemuridan. Saking serunya tiap sesi di BLKEP ini dan bertemu teman-teman sekelompok, sekelas yang sangat semangat, membuat saya terus semangat ikut sesi"
            author="Andray, KEP XIV, BLKEP V"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox text="......" author="NN" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
