import { storyithem } from "../arrays/row";
const Entcard = ({ image, text, number }) => {
  return (
    <div className="card">
      <div className="card-bg" style={{ backgroundImage: `url(${image})` }}>
        <p>Унших</p>
      </div>
      <div>
        <p className="cardtext2">{text}</p>
        <div className="info2">
          <img src="./share.svg" alt="share icon" />
          <span>{number}</span>
          <img
            src="https://mgl.gogo.mn//newsn/v4/images/comment-light.bd31b019.svg"
            alt=""
          />
          <span></span>
        </div>
      </div>
    </div>
  );
};
const Entertainment = (props) => {
  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <div className="content">
        <div>
          {" "}
          {storyithem.slice(0, 4).map((medee) => (
            <Entcard
              image={medee.img}
              text={medee.text}
              title={medee.title}
              number={medee.Number}
            />
          ))}
        </div>
        <div>
          {storyithem.slice(0, 4).map((medee) => (
            <Entcard
              image={medee.img}
              text={medee.text}
              title={medee.title}
              number={medee.Number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Entertainment;
