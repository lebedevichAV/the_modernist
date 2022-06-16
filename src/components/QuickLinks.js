import React from "react";

function QuickLinks({ data }) {
  return (
    <div className="quick-links">
      <h4 className="quick-links__title">{data.title}</h4>
      <ul className="quick-links__list">
        {data.list.map((link, index) => (
          <li className="quick-links__item" key={index}>
            <a className="quick-links__link" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickLinks;
