import React from "react";

const ApiDisplay = ({ id, advice }) => {
  return (
    <div className="Advice">
      <div className="id">ADVICE #{id}</div>
      <div className="slip">"{advice}"</div>
      <div className="rule">
        <div className="rule1"></div>
        <div className="rule3">
          <div className="pause"></div>
          <div className="pause"></div>
        </div>
        <div className="rule2"></div>
      </div>
    </div>
  );
};

export default ApiDisplay;
