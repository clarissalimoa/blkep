import React from "react";
import styled from "styled-components";
import TestimonialBox from "../Elements/TestimonialBox";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="flexCenter">
            <LogoWrapper>
              <TestimonialBox
                text="Melalui BLKEP saya diberi kesempatan untuk meneladani perubahan kehidupan rohani dari Pewarta yang dahulunya seorang yang luka batin terhadap ibunya, beliau membacakan surat kebenciannya pada ibunya yang beliau buat 25 tahun silam, berkat rahmat Tuhan hubungan beliau dengan ibunya dipulihkan dan menjadi sangat dekat."
                author="Anonymous"
              />
            </LogoWrapper>
          </div>
          <div className="flexCenter">
            <LogoWrapper>
              <TestimonialBox
                text="Puji Tuhan saya mengalami pemulihan hubungan dengan orang-orang yang pernah melukai saya, membenci saya dan pernah berseteru dengan saya sejak mengikuti pengajaran sesi 2 dalam topik Pemuridan. Saking serunya tiap sesi di BLKEP ini dan bertemu teman-teman sekelompok, sekelas yang sangat semangat, membuat saya terus semangat ikut sesi"
                author="Andray, KEP XIV, BLKEP V"
              />
            </LogoWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  width: 90%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
