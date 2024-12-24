import Column from "./Column";
import { newsData, articles, combinedArray } from "../arrays/row";

const Card = ({ image, article, title, number, time }) => {
  return (
    <div className="card2">
      <div className="card-bg2" style={{ backgroundImage: `url(${image})` }}>
        <p>Унших</p>
      </div>
      <div>
        <div>{article}</div>
        <div className="cardtext">{title}</div>

        <div className="card2svg">
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
          <div>
            <img
              data-v-32c3e03e=""
              src="https://mgl.gogo.mn//newsn/v4/images/time-gray.9098dcef.svg"
              style={{ width: 13 }}
              alt=""
            />
            <p>{time}</p>
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
              <div>
                <div></div>
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

          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/bfe643d1-36ba-4da7-8217-521d83e28491.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241219%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241219T122212Z&X-Goog-Expires=86399&X-Goog-Signature=34285f4678149de738e8212a8f8ff32c2bf65382cdfd4e172cf49608fbdce5c212b1bd456082f631c2aba83c1ad40f19a40b897e2e8220ae6f941d2e5f270215fce63514516e0e9ee293a49780d5741401fcdd51d47a03019c55b3f97ca3c34cea727091d313937f89a4ca5997030795061b6488422265db58ad130a46b19e733623540595fd5e40041d32f37c4249fc30683c9944ce0682006de18f0b5ebf756398ae7f3dbdcc596a1b5e7c93efee56f68290980b73fd00dccc3d27170c33298edbba9019f2a08c3904a9a164c1667f39a898178797a856d972affea31ebdeeb21f3f279b6c289f05b3a2829528a95e828197240f2f2e2c4760603bec7c2738&X-Goog-SignedHeaders=host"
            alt=""
            style={{
              width: "100%",
              maxWidth: "780px",
              aspectRatio: "780/126",
              marginBottom: "22px",
            }}
          />

          {articles.slice(3, 12).map((medee) => (
            <Card
              image={medee.image}
              article={medee.article}
              title={medee.title}
              number={medee.number}
              time={medee.time}
            />
          ))}

          <div>Илүү үзэх</div>
        </div>

        <Column combinedArray={combinedArray} />
      </div>
    </div>
  );
};
export default RowContainer;
