import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Informasi dan Pendaftaran</h1>
            <div>
              Untuk informasi lebih lanjut dapat menghubungi contact person
              sebagai berikut: <br />
              <b> Deddy:</b>
              <a href="https://wa.link/aeee09" style={{ color: "#0000fa" }}>
                {" "}
                0813-1683-0568 (WA)
              </a>
              <br />
              <b>Diana:</b>
              <a href="https://wa.link/jaiq21" style={{ color: "#0000fa" }}>
                {" "}
                0877-7109-1971 (WA)
              </a>
              <br />
              <b>Bernardin:</b>
              <a href="https://wa.link/m1iov6" style={{ color: "#0000fa" }}>
                {" "}
                0812-8055-0833 (WA)
              </a>
            </div>
          </HeaderInfo>

          <HeaderInfo>
            <h1 className="font40 extraBold">Form Pendaftaran</h1>
          </HeaderInfo>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRFzuL5-lmKOvEd2srDDEunM5MIX_h994ChtMAouvS9Mfdlg/viewform"
            style={{ color: "#0000fa" }}
          >
            *Jika form di bawah tidak muncul, klik Link Pendaftaran di sini.
            Pembayaran ditransfer ke <b>BCA 5390730626 an SUSANTY CHANDRA</b>
          </a>

          <div
            className="center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <iframe
              title="Form Pendaftaran BLKEP X"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfRFzuL5-lmKOvEd2srDDEunM5MIX_h994ChtMAouvS9Mfdlg/viewform?embedded=true"
              width="95%"
              height="2600"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading???
            </iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
// const Form = styled.form`
//   padding: 70px 0 30px 0;
//   input,
//   textarea {
//     width: 100%;
//     background-color: transparent;
//     border: 0px;
//     outline: none;
//     box-shadow: none;
//     border-bottom: 1px solid #707070;
//     height: 30px;
//     margin-bottom: 30px;
//   }
//   textarea {
//     min-height: 100px;
//   }
//   @media (max-width: 860px) {
//     padding: 30px 0;
//   }
// `;
// const ButtonInput = styled.input`
//   border: 1px solid #7620ff;
//   background-color: #7620ff;
//   width: 100%;
//   padding: 15px;
//   outline: none;
//   color: #fff;
//   :hover {
//     background-color: #580cd2;
//     border: 1px solid #7620ff;
//     color: #fff;
//   }
//   @media (max-width: 991px) {
//     margin: 0 auto;
//   }
// `;
// const ContactImgBox = styled.div`
//   max-width: 180px;
//   align-self: flex-end;
//   margin: 10px 30px 10px 0;
// `;
// const SumbitWrapper = styled.div`
//   @media (max-width: 991px) {
//     width: 100%;
//     margin-bottom: 50px;
//   }
// `;
