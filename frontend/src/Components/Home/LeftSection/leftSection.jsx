import React, { useEffect, useState } from 'react';
import "../section.css";

function LeftSection({ num_to_show, set_numShow }) {
  const [activeSteps, setActiveSteps] = useState(new Array(5).fill(0));

  const text_heading = [
    "General Info", 
    "Parents Details", 
    "Course Details", 
    "Address", 
    "Bus Facility"
  ];

  useEffect(() => {
    const updated = new Array(5).fill(0);
    updated[num_to_show] = 1;
    setActiveSteps(updated);
  }, [num_to_show]);

  return (
    <>
      <div className="midDivLeftSection flex">
        {activeSteps.map((val, i) => (
          <div
            key={`circle-${i}`}
            onClick={() => set_numShow(i)}
            className={`circle circle${i + 1} ${val === 0 ? "noCircle" : "yesCircle"}`}
          ></div>
        ))}
      </div>

      <div className="infoText">
        {activeSteps.map((val, i) => (
          <div
            key={`text-${i}`}
            onClick={() => set_numShow(i)}
            className={`${(val === 1) ? "text" : ""} text${i + 1} flex`}
          > 
            { val === 1 ? text_heading[i] : "" }
          </div>
        ))}
      </div>
    </>
  );
}

export default LeftSection;
