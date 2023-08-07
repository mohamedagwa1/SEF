import React from 'react';
// import { printDate } from "../logic/helpers.js";

function HeaderDate({ title, date }) {
  // const today = printDate();

  return (
    <section className="container my-5">
      <h6>{title}</h6>
      <div
        className="line"
        style={{
          backgroundColor: '#bf9b30',
        }}
      ></div>
      <h6 className="pt-2">{date}</h6>
    </section>
  );
}

export default HeaderDate;
