import React from "react";

function Logo({ logo_text }) {
  return (
    <div className="logo__box">
      <p className="logo__top">{logo_text[0]}</p>
      <p className="logo__bottom">{logo_text[1]}</p>
    </div>
  );
}

export default Logo;
