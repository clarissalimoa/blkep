import React from "react";
import styled from "styled-components";
import TestimonialBox from "../Elements/TestimonialBox";
//Assets
import TestiImage1 from "../../assets/img/testi-1.jpeg";
import TestiImage2 from "../../assets/img/testi-2.jpeg";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Apa Kata Mereka?</h1>
            <p className="font13">
              Bapak, Ibu, Kakak pasti penasaran ya dengan testimoni dari para
              peserta BLKEP sebelumnya?
              <br />
              Yuk baca beberapa testimoni di bawah~
            </p>
          </HeaderInfo>
          <div className="flexCenter">
            <LogoWrapper>
              <TestimonialBox
                text="Ketika saya mendapatkan undangan BLKEP di dalam grup WA, ada sesuatu yang menggerakkan hati saya untuk mendaftar. Saya merasakan sentuhan kuasa Roh Kudus pada saat pengajaran sesi membaca Firman Tuhan. Yang luar biasa adalah ternyata saya mendapatkan hampir semua jawaban yang saya cari dari setiap permasalahan yang saya hadapi. Satu ayat dari kitab Matius 6:33 
                “Tetapi carilah dahulu Kerajaan Allah dan kebenarannya, maka semuanya itu akan ditambahkan kepadamu.” Inilah ayat yang menguatkan Saya.
                Kalau selama ini saya hanya berpikir dengan berdoa setiap hari sudah cukup, tapi ternyata Tuhan mau menggunakan tangan hamba-Nya melalui salah satu sesi BLKEP untuk menyadarkan saya, bahwa saya bisa mendapatkan jawaban / petunjuk dari apa yang selalu saya doakan serta mendapat hikmat untuk dapat memahami rencana Tuhan dalam hidup saya. Inilah yang merubah kehidupan saya dalam berkeluarga dan hubungan terhadap sesama. Pada intinya setelah saya menyelesaikan seluruh sesi BLKEP ini, membuat saya memiliki sebuah gambaran yang baru terhadap diri saya sehingga membuat saya lebih berserah kepada Tuhan dan membiarkan rencana Tuhan terjadi dalam hidup saya."
                author="Anthony Kiro"
                img={TestiImage1}
              />
            </LogoWrapper>
          </div>
          <div className="flexCenter">
            <LogoWrapper>
              <TestimonialBox
                text="Saya adalah peserta KEP V, setelah saya menyelesaikan KEP,saya tergiur lagi utk belajar di BLKEP,
                Saya ikut bljr di BLKEP ini dg tujuan ,biar dlm hidup kekeluargaan kami; Tuhan jamah.
                Ternyata setelah mengikuti pelajaran BAB demi BAB,yg di jelaskan oleh bapak dan ibu pengajar, dan yg selalu saling membagi sharing sesama peserta dan saling menguatkan satu sama lain dan saling mendoakan, disinilah baru saya mengerti   tentang gambar diri.
                Di isini saya bener bener merasakan betapa baiknya Tuhan untuk saya...
                Selama 21 thn saya merasakan ketidak adilan dlm keluarga dan merasa sangat sakit hati yg sangat  mendalam, tapi  setelah saya mengikuti Rekoleksi Pemulihan  Gambar Diri yg diadakan  diakhir  BLKEP; disini banyak yg mendoakan saya.
                Saya benar- benar merasakan kehadiran Tuhan Yesus yang menjamah dan menjawab doa saya yg selama ini saya harapkan dan saya rindukan..
                Tuhan telah menyembuhkan sakit hati saya  dan semua Tuhan pulihkan dengan sangat baik
                🙏🙏🙏
                
                Ayo bapak ibu ,ikut belajar di BLKEP ya.
                Tuhan kta sangat baik,kita bisa benar-benar merasakan Roh kudus yg bekerja dlm hidup kta,
                MujizatNya benar- benar nyata...
                Tuhan jawab apa yg kita inginkan....
                Ayooo..ikut belajar di BLKEP yo..🙏😁"
                author="Margaretha Elly Otolia .B, KEP V, BLKEP IX"
                img={TestiImage2}
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
