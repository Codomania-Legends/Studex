import React from 'react';
import "../section.css";

function LeftSection({ num_to_show, set_numShow, text_heading }) {
  return (
    <>
      <div className="midDivLeftSection flex">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`circle circle${index + 1} ${num_to_show === index ? "yesCircle" : "noCircle"}`}
          ></div>
        ))}
      </div>

      <div className="infoText">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            onClick={() => set_numShow(index)}
            className={`${(num_to_show === index) ? "text" : ""} text${index + 1} flex`}
          >
            {num_to_show === index ? text_heading : ""}
          </div>
        ))}
      </div>
    </>
  );
}

export default LeftSection;
