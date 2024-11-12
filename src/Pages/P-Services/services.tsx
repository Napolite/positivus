import ServicesTab from "../../components/tabs/tab";
import "./servicces.css";
import { Tab1 } from "../../assets";

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
        <ServicesTab
          topText={"Search engine"}
          bottomtext={"optimisation"}
          image={Tab1}
          mainBG={"--grey"}
          headerBG={"--green"}
        />
        <ServicesTab
          topText={"Search engine"}
          bottomtext={"optimisation"}
          image={Tab1}
          mainBG={"--grey"}
          headerBG={"--green"}
        />
        <ServicesTab
          topText={"Search engine"}
          bottomtext={"optimisation"}
          image={Tab1}
          mainBG={"--grey"}
          headerBG={"--green"}
        />
        <ServicesTab
          topText={"Search engine"}
          bottomtext={"optimisation"}
          image={Tab1}
          mainBG={"--grey"}
          headerBG={"--green"}
        />
        <ServicesTab
          topText={"Search engine"}
          bottomtext={"optimisation"}
          image={Tab1}
          mainBG={"--grey"}
          headerBG={"--green"}
        />
        <ServicesTab
          topText={"Search engine"}
          bottomtext={"optimisation"}
          image={Tab1}
          mainBG={"--grey"}
          headerBG={"--green"}
        />
        =
      </div>
    </div>
  );
}

export default Services;
