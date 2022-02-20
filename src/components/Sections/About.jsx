import React from "react";
import styled from "styled-components";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Tentang BLKEP</h1>
            <p className="font13">
              Oya, pasti Ibu, Bapak, Kakak bertanya-tanya mengenai BLKEP
              <br />
              <br />
              Kita baca detailnya di bawah ya, tetap semangat !
            </p>
          </HeaderInfo>
          <br />
          <Accordion className="whiteBg">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Apa itu BLKEP?</b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Evangelisasi adalah tugas perutusan sebagai pesan dan amanat
                Yesus sebelum kenaikan-Nya ke surga, “Kepada-Ku telah diberikan
                segala kuasa di surga dan di bumi. Karena itu pergilah,
                jadikanlah semua bangsa murid-Ku dan baptislah mereka dalam nama
                Bapa dan Anak dan Roh Kudus, dan ajarlah mereka melakukan segala
                sesuatu yang telah Kuperintahkana kepadamu. Dan ketahuilah, Aku
                menyertai kamu senantiasa sampai kepada akhir zaman“ (Matius
                28:18-20).
                <br />
                <br /> Bina Lanjut Kursus Evangelisasi Pribadi (BLKEP) merupakan
                kegiatan lanjutan dari Kursus Evangelisasi Pribadi (KEP). KEP
                dan BLKEP berada di bawah Sie Kerasulan Kitab Suci (KKS) dan
                Korbid Pewartaan di Paroki. Sie KKS bekerjasama dengan Sekolah
                Evangelisasi Pribadi (SEP) Shekinah untuk menyelenggarakan BLKEP
                di Gereja Trinitas Cengkareng
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Apa tujuan BLKEP? </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                BLKEP hadir untuk pemulihan pribadi setiap pribadi manusia agar
                kembali seturut citra Allah di dalam retret penyembuhan luka
                batin. Dalam pewartaan dan pelayanan kita, kerapkali kita
                menemukan ketidakharmonisan di sana. Emosi tak terkendali,
                amarah, sakit hati, dendam, iri, dan kebencian begitu membebani
                tanpa kita tahu bagaimana melepaskannya. Semua hal ini akhirnya
                membawa kita pada kemuraman, mandeg, sakit psiko-somatis, sakit
                jasmani, dan kehilangan energi kehidupan. Karena itulah, program
                BL KEP VI ini kemudian akan diakhiri dengan retret penyembuhan
                luka batin.
                <br />
                <br /> Pengalaman cinta dan kasih, baru dapat kita ciptakan
                ketika hati sudah bersih dari banyak belenggu dan pekatnya
                endapan kehidupan. Dengan kata lain, jika mukjizat kesembuhan
                dan pemulihan benar-benar ingin kita terima dan alami, maka anda
                harus mulai dahulu dengan membersihkan hati anda. Anda ingin
                tahu caranya membersihkan hati? Hanya satu kata jawabannya:
                Pengampunan! Pengampunan berarti harus ada tindakan aktif dari
                anda untuk berani mengampuni dan meminta ampun. Benar, hanya
                satu kata itu yang bila anda mampu memeluknya dalam-dalam, hidup
                penuh cinta, rangkaian mukjizat segera menghampiri anda,
                kesembuhan dan pemulihan termasuk diantaranya.
                <br />
                <br /> Retret Penyembuhan Luka Batin ini bermanfaat sebagai
                sarana untuk mengampuni, berdamai, memutuskan ikatan atau
                belenggu, dan memulihkan kehidupan agar kita yang terbeban dan
                terluka menjadi pribadi yang baru dan lepas-bebas, agar hidup
                menjadi semakin berdaya bersama Allah dan untuk Allah.
                <br />
                <br /> Dalam retret ini, Yesus dengan tangan-Nya yang lembut dan
                terbuka memanggil setiap pribadi untuk datang dan mendapatkan
                pengampunan serta cinta belas kasih-Nya, karena kasih
                pengampunanNya yang begitu besar berkuasa menyembuhkan dan
                membebaskan kita.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Apa saja yang dipelajari? </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>Rekoleksi Awal Pertumbuhan</ListItem>
                  <ListItem>Pemuridan</ListItem>
                  <ListItem>Iman Katolik</ListItem>
                  <ListItem>Gospel Sharing</ListItem>
                  <ListItem>Self Image</ListItem>
                  <ListItem>Rekoleksi ONLINE</ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b>
                      {" "}
                      Bagaimana proses pengajarannya saat pandemi sekarang ini?{" "}
                    </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Pandemi belum berakhir, tapi semangat kita tidak boleh berakhir.
                Maka kita akan mengadakan BLKEP Angkatan VI dengan media Zoom
                online dari rumah masing-masing peserta. Konsep pengajaran
                detailnya akan diumumkan kemudian oleh Panitia.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Bagaimana retretnya nanti ya? </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Retret Penyembuhan Luka Batin akan tetap dilangsungkan dengan
                media Zoom online, dengan keterbatasan tidak dapat bersentuhan
                secara fisik, tetapi kita percaya Roh Kudus tetap hadir
                dimanapun kita berada karena Ia menembus batas ruang dan waktu.
                Amin.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Berapa biaya pengajaran dan retret perutusannya? </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Biaya pengajaran BLKEP sebesar <b> Rp 100.000,-</b>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
