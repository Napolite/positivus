import ServicesTab from "../../components/tabs/tab";
import "./servicces.css";
import { services } from "../../Pages/P-Services/services.ts";

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
    </div>
  );
}

export default Services;
