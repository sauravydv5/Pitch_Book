import React from "react";
import "./feedback.css";

const Feedback = () => {
  const clientFeedback = {
    text: `“Being a generalist tech fund, the investors tend to have a vast range of 
            sector interests and want to dive deep when assessing new startups. PitchBook 
            allows us to unlock multifaceted and reliable data that helps with this 
            day-to-day research.”`,
    author: "—Laura McGinnis, VC Investor, Balderton Capital",
  };

  return (
    <div className="Feed_container">
      <div className="Upper">
        <h1>What our clients say</h1>
        <div className="FeedImg">
          {[29, 30, 31, 32, 33].map((num) => (
            <img
              key={num}
              src={`/image/img${num}.webp`}
              alt={`Client ${num}`}
            />
          ))}
        </div>

        <div className="Down">
          <img src="/image/img34.webp" alt="Client Feedback" />
          <div className="Downtxt">
            <h1>{clientFeedback.text}</h1>
            <p>{clientFeedback.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
