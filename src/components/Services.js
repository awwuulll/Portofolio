import SectionContainer from "./SectionContainer";
const Services = () => {
  return (
    <SectionContainer
      name={"resume"}
      extraClass={"resume-section"}
      title={"My Resume"}
      subTitle={"History"}
      leftImage="static/img/title-2.jpg"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Experience</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">
                    Information Systems Department of the Islamic University of
                    Indonesia
                  </span>
                  <label>JAN 2024 - DEC 2024</label>
                </div>
                <div className="r-info">
                  <p>
                    During my time as a Junior Staff at the Information Systems
                    Department, I began as a UX Designer in the first month,
                    then in the second month, I was challenged to become a
                    Frontend Developer for the remainder of my Junior Staff
                    role. At the Information Systems Department, I used tools
                    such as Figma, Angular, TypeScript, GitLab, Confluence,
                    Jira, and adopted the SCRUM framework.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Apple</span>
                  <label>JAN 2022 - JAN 2023</label>
                </div>
                <div className="r-info">
                  <p>
                    I worked as a student staff member at the Informatics
                    Department of UII and as a graphic designer. My
                    responsibilities included creating content for the Instagram
                    feed of informatics.uii. The tools I used as a graphic
                    designer were Adobe Illustrator and Figma.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Education</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Islamic University of Indonesia - Informatics</span>
                  <label>AUG 2020 - NOV 2024</label>
                </div>
                <div className="r-info">
                  <p>
                    I studied at the Islamic University of Indonesia in the
                    Bachelor's program of Informatics. During my studies, I
                    worked on final semester projects as outputs for each
                    semester. My final thesis focused on analyzing the
                    robustness and resilience of enterprise networks that are
                    vulnerable to disruptions, using edge sensor technology
                    based on Raspberry Pi 4.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">SMA Negeri 3 Unggulan Tenggarong</span>
                  <label>2017 - 2020</label>
                </div>
                {/* <div className="r-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div> */}
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
      </div>{" "}
      {/* row */}
      <div className="skill-row m-30px-t sm-m-20px-t">
        <div className="sub-title m-30px-b">
          <h2 className="dark-color theme-after">My Skills</h2>
        </div>
        <div className="row">
          <div className="col-md-6 p-30px-r sm-p-15px-r">
            <h3 className="dark-color">Design Skills</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>Figma</h6>
              </div>
              <div className="progress-lt">
                <h6>Illustrator</h6>
              </div>
              {/* /progress-lt */}
            </div>
          </div>
          <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
            <h3 className="dark-color">Coding Skills</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>HTML</h6>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>CSS</h6>
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Javascript</h6>
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>TypeScript</h6>
              </div>
              {/* /progress-lt */}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Services;
