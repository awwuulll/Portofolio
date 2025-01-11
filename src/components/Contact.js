import SectionContainer from "./SectionContainer";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <SectionContainer
      name={"contact"}
      title="CONTACT ME"
      subTitle={"GET IN TOUCH"}
      leftImage="static/img/title-4.jpg"
    >
      <div className="row">
        <div className="col-md-4 m-15px-tb">
          <div className="contact-info">
          <i className="theme-color ti-mobile" />
            <h6 className="dark-color font-alt">Phone</h6>
            <p>
              <a href="https://wa.me/6281351276477" target="_blank" rel="noopener noreferrer" >
                Phone: +62 813 5127 6477
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-4 m-15px-tb sm-m-0px-b">
          <div className="contact-info">
            <i className="theme-color ti-email" />
            <h6 className="dark-color font-alt">Email</h6>
            <p>
              hakimauliarahman26@gmail.com
            </p>
          </div>
        </div>
        <div className="col-md-4 m-15px-tb sm-m-0px-b">
          <div className="contact-info">
          <i class="fa-brands fa-linkedin" style={{ color: '#FFC815' }}></i>
            <h6 className="dark-color font-alt">Email</h6>
            <p>
              <a href="https://www.linkedin.com/in/awwuulll" target="_blank" rel="noopener noreferrer" >
                LinkedIn: Aulia Rahman Hakim
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 m-15px-tb">
          <div className="contact-info">
            <i className="theme-color ti-location-pin" />
            <h6 className="dark-color font-alt">Address</h6>
            <p>Jl Harjo Sumarto Loa Kulu Kutai Kartanegara Kalimantan Timur , INA 75571.</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
