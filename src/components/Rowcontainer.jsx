import Column from "./Column";
import { newsData, articles, combinedArray } from "../arrays/row";
import Slider from "./Slider";

const Card = ({ image, article, title, number, time }) => {
  return (
    <div className="card2">
      <div className="card-bg2" style={{ backgroundImage: `url(${image})` }}>
        <p className="hidden">Унших →</p>
      </div>
      <div className="cardaside">
        <div className="boldtext">{article}</div>
        <p className="greytext">{title}</p>

        <div className="cardsvg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ width: "13px" }}
          >
            <path
              fill="#c4c4c4"
              d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
            />
          </svg>
          <span>{number}</span>
          <div className="cardsvg">
            <img
              data-v-32c3e03e=""
              src="https://mgl.gogo.mn//newsn/v4/images/time-gray.9098dcef.svg"
              style={{ width: 13 }}
              alt=""
            />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RowContainer = () => {
  return (
    <div className="content">
      <div className="rowcontainer">
        <div className="rowleft">
          <div className="bluetext">
            <p>Өнөөдөр</p>
            <img
              src="https://mgl.gogo.mn//newsn/v4/images/todaynews.6ba1d8b2.png"
              alt=""
              width="23px"
            />
          </div>
          <div className="dates">
            {newsData.slice(0, 6).map((props) => (
              <div className="day">
                <div className="grey"></div>
                <p>{props.day}</p>
              </div>
            ))}
            <p>...</p>
          </div>
          {articles.slice(0, 3).map((medee) => (
            <Card
              image={medee.image}
              article={medee.article}
              title={medee.title}
              number={medee.number}
              time={medee.time}
            />
          ))}
          <Slider />

          {articles.slice(3, 15).map((medee) => (
            <Card
              image={medee.image}
              article={medee.article}
              title={medee.title}
              number={medee.number}
              time={medee.time}
            />
          ))}

          <div className="more">
            Илүү үзэх{" "}
            <img
              src="https://mgl.gogo.mn//newsn/v4/images/more.50d348c2.png"
              alt=""
              style={{ width: "17px" }}
            />
          </div>
        </div>

        <Column combinedArray={combinedArray} />
      </div>
    </div>
  );
};
export default RowContainer;
