const catoithem = [
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
    title:
      "Л.Оюун-Эрдэнэ: Иргэн бүр 350 мянган төгрөгийн ногдол ашиг хүртэх боломж бүрдсэн",
    number: "501",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/-20122024-1734662229-860155718-mobi_nuur2.jpg",
    title:
      "Дэлхийн 200 гаруй улсад ашиглаж болох Global Data eSim-ний талаар та юу мэдэх ёстой вэ",
    number: "3",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/-20122024-1734668987-2102376822-odontuya1.jpeg",
    title:
      "С.Одонтуяа: Багануурын уурхайг түшиглэн коксжсон буюу хөх нүүрсний үйлдвэр байгуулна",
    number: "72",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/-20122024-1734668987-2102376822-odontuya1.jpeg",
    title:
      "С.Одонтуяа: Багануурын уурхайг түшиглэн коксжсон буюу хөх нүүрсний үйлдвэр байгуулна",
    number: "72",
  },
];

const Catecard = ({ image, text, title, number, time }) => {
  return (
    <div className="catocard">
      <div className="catocard-bg" style={{ backgroundImage: `url(${image})` }}>
        <p>{text}</p>
      </div>
      <div className="catocard-content">
        <p className="catocard-title">{title}</p>
        <div className="catocard-info">
          <img src="./share.svg" alt="share icon" />
          <span>{number}</span>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div className="content">
      <div className="category-header">
        GoGo <span className="category-subtitle">СТОРИ</span>
      </div>
      <div className="category-section">
        {catoithem.map((item, index) => (
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
      <div className="category-header">
        <img
          src="https://mgl.gogo.mn//newsn/v4/images/tech.a4b28dbb.png"
          style={{ width: 23 }}
          alt="tech icon"
          className="category-icon"
        />
        Технологи
      </div>
      <div className="category-section">
        {catoithem.map((item, index) => (
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
      <div className="category-header">
        <img
          src="https://mgl.gogo.mn//newsn/v4/images/comic.9afb6d5b.png"
          style={{ width: 25 }}
          alt="comic icon"
          className="category-icon"
        />
        Комик
      </div>
      <div className="category-section">
        {catoithem.slice(0, 2).map((item, index) => (
          <div className="comic-card" key={index}>
            <div
              className="comic-card-bg"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <p>{item.text}</p>
            </div>
            <div className="comic-card-content">
              <p className="catocard-title">{item.title}</p>
              <div className="catocard-info">
                <img src="./share.svg" alt="share icon" />
                <span>{item.number}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
