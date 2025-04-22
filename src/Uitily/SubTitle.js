import React from "react";

const SubTitle = (title, btntitle) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-tilte">{title}</div>
      {btntitle ? <div>{btntitle}</div> : null}
    </div>
  );
};

export default SubTitle;
