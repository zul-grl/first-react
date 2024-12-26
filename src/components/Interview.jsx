import React from "react";
import { newsList } from "../arrays/interview";
const NewsFeed = () => {
  return (
    <div className="content">
      <div className="news-feed">
        <h2 className="imgtitle">
          <img
            src="https://mgl.gogo.mn//newsn/v4/images/interview.b47c0f6b.png"
            style={{ width: "20px", height: 25 }}
          />
          Ярилцлага
        </h2>
        <div className="news-layout">
          <div
            className="large-card"
            style={{ backgroundImage: `url(${newsList[0].image})` }}
          >
            <div className="gradient">
              <div className="tag">{newsList[0].tag}</div>
              <div className="title">{newsList[0].title}</div>
              <div className="detail">
                ДЭЛГЭРЭНГҮЙ{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10px"
                  viewBox="0 0 448 512"
                  fill="white"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="small-cards">
            {newsList.slice(1, 5).map((item) => (
              <div
                className="small-card"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="gradient">
                  <div className="tag">{item.tag}</div>
                  <div className="title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default NewsFeed;
