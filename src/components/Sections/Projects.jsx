import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import Photo1 from "../../assets/img/photos/1.jpeg";
import Photo2 from "../../assets/img/photos/2.jpeg";
import Photo3 from "../../assets/img/photos/3.jpeg";
import Photo4 from "../../assets/img/photos/4.jpeg";
import Photo5 from "../../assets/img/photos/5.jpeg";
import Photo6 from "../../assets/img/photos/6.jpeg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Lulusan BLKEP seperti apa ya? </h1>
            <p className="font13">Seperti yang ada dalam foto-foto seru ini:</p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Photo1} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Photo2} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Photo3} />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Photo4} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Photo5} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Photo6} />
            </div>
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
  @media (max-width: 860px) {
    text-align: center;
  }
`;
