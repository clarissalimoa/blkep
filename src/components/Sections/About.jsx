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
  Img,
} from "@chakra-ui/react";

import JadwalImage from "../../assets/img/photos/jadwal.jpg";

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
            {/* <AccordionItem>
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
            </AccordionItem> */}
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
                  <ListItem>Pertumbuhan</ListItem>
                  <ListItem>Pemuridan</ListItem>
                  <ListItem>Iman Katolik</ListItem>
                  <ListItem>Gospel Sharing</ListItem>
                  <ListItem>Self Image</ListItem>
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
                Maka kita akan mengadakan BLKEP Angkatan X dengan media{" "}
                <a href="https://zoom.us/">
                  <b> Zoom </b>
                </a>
                online meeting dari rumah masing-masing peserta. Konsep
                pengajaran detailnya akan diumumkan kemudian oleh Panitia.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Berapa biaya pendaftaran? </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Biaya pengajaran BLKEP sebesar <b> Rp 100.000,-</b>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Bagaimana jadwal belajarnya? </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Berikut ini adalah jadwal pengajaran yang berlangsung mulai Juni
                2022 - Februari 2023
                <Img
                  className="radius8"
                  src={JadwalImage}
                  alt="office"
                  style={{ zIndex: 9, width: "95%", alignItems: "end" }}
                />
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
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
