import { catoithem } from "../arrays/category";
const Catecard = ({ image, text, title, number, too }) => {
  return (
    <div className="catocard">
      <div
        className="catocard-bg"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <p className="hidden">{text} →</p>
      </div>
      <div className="catocard-content">
        <p className="catocard-title">{title}</p>
        <div className="info">
          <img src="./share.svg" alt="share icon" />
          <span>{number}</span>
          <img
            src="https://mgl.gogo.mn//newsn/v4/images/comment-light.bd31b019.svg"
            alt=""
          />
          <span>{too}</span>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div className="content">
      <div className="bluespan">
        GoGo
        <span>ХЭВ МАЯГ</span>
      </div>
      <div className="category-section">
        {catoithem.slice(0, 4).map((item, index) => (
          <Catecard
            key={index}
            image={item.image}
            text={item.text}
            title={item.title}
            number={item.number}
            time={item.time}
            too={item.too}
          />
        ))}
      </div>
      <h2 className="imgtitle">
        <img
          src="https://mgl.gogo.mn//newsn/v4/images/tech.a4b28dbb.png"
          style={{ width: 23 }}
          alt="tech icon"
          className="category-icon"
        />
        Технологи
      </h2>
      <div className="category-section">
        {catoithem.slice(4, 8).map((item, index) => (
          <Catecard
            key={index}
            image={item.image}
            text={item.text}
            title={item.title}
            number={item.number}
            time={item.time}
          />
        ))}
      </div>
      <h2 className="imgtitle">
        <img
          src="https://mgl.gogo.mn//newsn/v4/images/comic.9afb6d5b.png"
          style={{ width: 25 }}
          alt="comic icon"
          className="category-icon"
        />
        Комик
      </h2>
      <div className="category-section">
        {catoithem.slice(8, 10).map((item) => (
          <div className="comiccard">
            <div
              className="comic-card-bg"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <p className="hidden">{item.text}</p>
            </div>
            <div className="catocard-content">
              <p className="catocard-title">{item.title}</p>
              <div className="info">
                <img src="./share.svg" alt="share icon" />
                <span>{item.number}</span>
                <img
                  src="https://mgl.gogo.mn//newsn/v4/images/comment-light.bd31b019.svg"
                  alt=""
                />
                <span>{item.too}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
