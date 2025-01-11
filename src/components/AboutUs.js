import SectionContainer from "./SectionContainer";

const AboutUs = () => {
  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section"
      title={"About"}
      subTitle={"WHO I AM"}
      leftImage="static/img/title-1.jpg"
      leftImageTitle={"About Me"}
    >
      <div className="row">
        <div className="col-md-4">
          <img src="static/img/my-pic.jpg" title alt />
        </div>
        <div className="col-md-8 md-m-30px-t">
          <div className="about-text">
            <h3 className="dark-color">I'm Aulia Rahman Hakim</h3>
            <p className="m-0px">
              I was born in Loa Kulu in 2002 and graduated with a Bachelor's
              degree in Informatics from the Islamic University of Indonesia. I
              have a strong passion for programming, particularly in front-end
              web development, UI/UX, and basic networking.
              I am also proficient in various Adobe software. I have a deep
              interest in technological advancements and am always excited to
              share my knowledge with those around me. I am dedicated to
              continuously honing my skills and pushing the boundaries of my
              knowledge to bring innovative ideas to life.
            </p>
          </div>{" "}
          {/* about-text */}
          <div className="row m-30px-t">
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-control-shuffle" />
                <div className="feature-content">
                  <h5 className="dark-color">Developer</h5>
                  <p>
                    In the field of development, I am proficient in HTML/CSS and
                    TypeScript, skills I gained while working as a Junior Staff
                    at the Information Systems Department of the Islamic
                    University of Indonesia.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-vector" />
                <div className="feature-content">
                  <h5 className="dark-color">UI/UX</h5>
                  <p>
                    During my studies, I often took on the role of UI/UX in my
                    final semester projects. I am proficient in using Figma and
                    am currently learning Framer.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-palette" />
                <div className="feature-content">
                  <h5 className="dark-color">Graphic Designer</h5>
                  <p>
                    During my studies, I am a designer for the Informatic
                    Student Staff at . I am directly assigned by my department
                    to create content and posters for lectures.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            {/* <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-mobile" />
                <div className="feature-content">
                  <h5 className="dark-color">Mobile apps</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>{" "} */}
            {/* col */}
          </div>{" "}
          {/* row */}
          <div className="btn-bar">
            <a href="https://storage.rxresu.me/cm5dx25sl4r70dbpoa7t80a1c/resumes/Resume%20v1.pdf" className="btn btn-theme">
              Download CV
            </a>
          </div>
        </div>
      </div>{" "}
    </SectionContainer>
  );
};
export default AboutUs;
