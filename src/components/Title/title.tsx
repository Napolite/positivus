/* eslint-disable @typescript-eslint/no-explicit-any */

import "./title.css";
function Title({
  titleHeader,
  titleText,
}: {
  titleHeader: string;
  titleText: string | any;
}) {
  return (
    <div className="services-header">
      <div>{titleHeader}</div>
      <>{titleText}</>
    </div>
  );
}

export default Title;
