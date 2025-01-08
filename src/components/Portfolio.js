import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionContainer from "./SectionContainer";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    imagesLoaded(
      document.querySelector(".portfolio-cols"),
      function (instance) {
        isotope.current = new Isotope(".portfolio-cols", {
          itemSelector: ".portfolio-item",
          // layoutMode: "fitRows",
          percentPosition: true,
          masonry: {
            columnWidth: ".portfolio-item",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      }
    );
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <SectionContainer
      name={"portfolio"}
      title={"My Projects"}
      subTitle={"Latest Work"}
      leftImage="static/img/title-3.jpg"
    >
      <div className="portfolio-section">
        <div className="portfolio-filter m-10px-b">
          <ul className="filter text-left text-md-center">
            {" "}
            <li
              className={`${activeBtn("*")} theme-after`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </li>{" "}
            <li
              className={`${activeBtn("website")} theme-after`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              Website
            </li>{" "}
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
            >
              Projects
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            <li className="portfolio-item website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a
                    href="https://blog-aulia.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://i.ibb.co.com/bQFgkzW/IMG-81581.jpg"
                      title
                      alt
                    />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h5>My blog</h5>
                  <span>Daily doodle</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img
                      src="https://i.ibb.co.com/7JF8cQx/Frame-18.png"
                      title
                      alt
                    />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="https://doi.org/10.33022/ijcs.v13i5.4415"
                        className="theme-color"
                        title="Journal (English)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://dspace.uii.ac.id/handle/123456789/54079"
                        className="theme-color"
                        title="Thesis (Indonesia)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Final college project</h5>
                  <span>Wifi network monitoring </span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item app apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="https://uiiacid-my.sharepoint.com/:w:/g/personal/20523061_students_uii_ac_id/ESauoQVNfh1IhoUw_DWxNcMBuhiyNHCw5NsgHtlQrN8O9g?e=Phbg4W">
                    <img src="https://i.ibb.co.com/nwds7Gf/DSC03947.jpg" title alt />
                  </a>
                  <div className="hover">
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>First batch Junior Staf BSI</h5>
                  <span>Click this card to see my report</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
          </ul>{" "}
          {/* row */}
        </div>{" "}
        {/* portfolio content */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
