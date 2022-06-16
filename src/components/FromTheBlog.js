import React from "react";

function FromTheBlog({ data }) {
  return (
    <div className="from-the-blog">
      <h4 className="from-the-blog__title">{data.title}</h4>
      <div className="from-the-blog__content">
        <h5 className="from-the-blog__post-title">{data.post_title}</h5>
        <p className="from-the-blog__author">
          {data.author},{" "}
          <span className="from-the-blog__site">{data.site}</span>
        </p>
        <p className="from-the-blog__date">{data.date}</p>
        <p className="from-the-blog__post">{data.post_text}</p>
        <a className="from-the-blog__link" href="#">
          {data.link}
        </a>
      </div>
    </div>
  );
}

export default FromTheBlog;
