import { entarr } from "../arrays/entertainment";
const Entcard = ({ image, text, number, icon }) => {
  return (
    <div className="ent-card">
      <img className="ent-img" src={icon} alt="" />
      <div className="card-bg" style={{ backgroundImage: `url(${image})` }}>
        <p className="hidden">Унших →</p>
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
    <div className="ent">
      <div className="content">
        <h2 className="imgtitle" style={{ color: "white" }}>
          {" "}
          <img
            src="https://mgl.gogo.mn//newsn/v4/images/play-btn.12e64771.svg"
            style={{ width: "30px" }}
            alt=""
          />{" "}
          Үзэх
        </h2>
        <div className="ent-row">
          {" "}
          {entarr.slice(0, 4).map((medee) => (
            <Entcard
              image={medee.img}
              text={medee.text}
              title={medee.title}
              number={medee.Number}
              icon={medee.icon}
            />
          ))}
        </div>
        <div className="ent-row">
          {entarr.slice(4, 8).map((medee) => (
            <Entcard
              image={medee.img}
              text={medee.text}
              title={medee.title}
              number={medee.Number}
              icon={medee.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Entertainment;
