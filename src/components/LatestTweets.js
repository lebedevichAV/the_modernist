import React from "react";

function LatestTweets({ data }) {
  return (
    <div className="latest-tweets">
      <h4 className="latest-tweets__title">{data.title}</h4>
      <div className="latest-tweets__content">
        {data.tweets.map((tweet, index) => (
          <p className="latest-tweets__tweet" key={index}>
            <span className="latest-tweets__author">{tweet.author}</span>{" "}
            {tweet.post}
          </p>
        ))}
      </div>
    </div>
  );
}

export default LatestTweets;
