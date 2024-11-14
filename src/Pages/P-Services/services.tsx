import ServicesTab from "../../components/tabs/tab";
import "./servicces.css";
import { services } from "../../Pages/P-Services/services.ts";
import { MIH } from "../../assets/index.ts";

function Services() {
  return (
    <div className="services-root">
      <div className="services-header">
        <div>Services</div>
        <p>
          At our digital marketing agency, we offer a range of services to
          <br /> help businesses grow and succeed online. These services
          include:
        </p>
      </div>
      <div className="services">
        {services?.map((service) => (
          <ServicesTab {...service} />
        ))}
      </div>
      <div className="services-footer-main">
        <div className="services-footer">
          <p className="services-footer-p1">Let’s make things happen</p>
          <p className="services-footer-p2">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="services-footer-button">
            Get your free proposal
          </button>
        </div>
        <div className="services-footer-image">
          <img src={MIH} />
        </div>
      </div>
    </div>
  );
}

export default Services;
