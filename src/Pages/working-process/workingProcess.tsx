import ProcessAccordion from "../../components/processAcordion/pAccrodion";
import Title from "../../components/Title/title";

import "./workinProcess.css";

function WorkingProcess() {
  return (
    <div className="work-p-main">
      <Title
        titleHeader={"Our Working Process"}
        titleText={"Step-by-Step Guide to Achieving Your Business Goals"}
      />
      <div className="work-p-tabs">
        <ProcessAccordion />
      </div>
    </div>
  );
}

export default WorkingProcess;
