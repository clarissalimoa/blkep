import React from "react";
import styled from "styled-components";
// Assets
import HeaderImage from "../../assets/img/header.jpeg";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">
            Bina Lanjut Kursus Evangelisasi Pribadi (BLKEP) Angkatan X
          </h1>
          <HeaderP className="font13 semiBold">
            Salam Damai Kristus,
            <br /> Selamat datang Ibu, Bapak, Saudari, Saudara yang terkasih di
            halaman pengenalan BLKEP Gereja Trinitas Angkatan X . Selamat ya
            sudah lulus KEP. Lulus KEP angkatan berapa? Lebih joss kalau
            langsung dilanjutkan ke BLKEP ya, semangatnya masih berkobar-kobar.
            Tapi yang lulus angkatan-angkatan sebelumnya juga OK kog
            semangatnya. Di BLKEP kita semua diperbarui oleh api Roh Kudus.
          </HeaderP>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src={HeaderImage}
            alt="office"
            style={{ zIndex: 9 }}
          />
          {/* <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>
                  Bukan kamu yang memilih Aku, tetapi Akulah yang memilih kamu.
                  Dan Aku telah menetapkan kamu, supaya kamu pergi dan
                  menghasilkan buah dan buahmu itu tetap, supaya apa yang kamu
                  minta kepada Bapa dalam nama-Ku, diberikan-Nya kepadamu.
                </em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                Yohanes 15:16
              </p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper> */}
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
  //
`;
// const QuoteWrapper = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 50px;
//   max-width: 330px;
//   padding: 30px;
//   z-index: 99;
//   @media (max-width: 960px) {
//     left: 20px;
//   }
//   @media (max-width: 560px) {
//     bottom: -50px;
//   }
// `;
// const QuotesWrapper = styled.div`
//   position: absolute;
//   left: -20px;
//   top: -10px;
// `;
// const DotsWrapper = styled.div`
//   position: absolute;
//   right: -100px;
//   bottom: 100px;
//   z-index: 2;
//   @media (max-width: 960px) {
//     right: 100px;
//   }
//   @media (max-width: 560px) {
//     display: none;
//   }
// `;
