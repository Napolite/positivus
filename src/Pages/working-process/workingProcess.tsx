import ProcessAccordion from "../../components/processAcordion/pAccrodion";
import Title from "../../components/Title/title";

import "./workinProcess.css";

function WorkingProcess() {
  const Processes: {
    sn: string;
    title: string;
    note: string;
  }[] = [
    {
      sn: "01",
      title: "Consultation",
      note: `During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.`,
    },
    {
      sn: "02",
      title: "Research and Strategy Development",
      note: `During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.`,
    },
    {
      sn: "03",
      title: "Implementation",
      note: `During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.`,
    },
    {
      sn: "04",
      title: "Monitoring and Optimization",
      note: `During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.`,
    },
    {
      sn: "05",
      title: "Reporting and Communication",
      note: `During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.`,
    },
    {
      sn: "06",
      title: "Continual Improvement",
      note: `During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.`,
    },
  ];
  return (
    <div className="work-p-main">
      <Title
        titleHeader={"Our Working Process"}
        titleText={"Step-by-Step Guide to Achieving Your Business Goals"}
      />
      <div className="work-p-tabs">
        {Processes?.map((process) => (
          <div>
            <ProcessAccordion
              sn={process?.sn}
              title={process?.title}
              note={process?.note}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkingProcess;
