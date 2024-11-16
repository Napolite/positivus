import Title from "../../components/Title/title";
import CaseStudySub from "../../components/case-studeis/cs";

import "./caseStudy.css";

function CaseStudy() {
  const studies = [
    "For a local restaurant,  implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  ];
  return (
    <div className="cs-root">
      <Title
        titleHeader="Case Studies"
        titleText={
          <p>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        }
      />
      <div className="cs-main">
        {studies.map((study: string, index: number) => (
          <div
            className="study-sub-main"
            style={{
              borderLeft: index !== 0 ? "2px white solid" : "",
            }}
          >
            <CaseStudySub studyText={study} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudy;
