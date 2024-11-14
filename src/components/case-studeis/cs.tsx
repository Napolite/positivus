import { LM } from "../../assets";
import "./cs.css";

function CaseStudySub({ studyText }: { studyText: string }) {
  return (
    <div className="study-sub">
      <div className="ss-text">{studyText}</div>
      <div className="ss-learn-more">
        <div>Learn more</div>
        <img src={LM} />
      </div>
    </div>
  );
}

export default CaseStudySub;
