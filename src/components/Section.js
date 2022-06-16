import React from "react";

function Section({ className, children }) {
  return (
    <section className={className}>
      <div className="container">
        <div className={className + "__inner"}>{children}</div>
      </div>
    </section>
  );
}

export default Section;
