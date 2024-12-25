const catoithem = [
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/510/images/c/2024/12/326099-17122024-1734407410-339667464-0N2A33001.jpg",
    title:
      "Г.Мишээл: 'Би буцаж ирж төслөө заавал дуусгана' гэж бүжигчдэдээ амласны дагуу ирсэн",
    number: "501",
    too: "12",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/510/images/c/2024/12/325926-11122024-1733903379-717030538-467748002_1168452751355862_7973548431715925727_n.jpg",
    title:
      "ЗӨВЛӨГӨӨ: Хүйтэнд малгай өмсөхгүй бол хараа муудаж, нулимс гоождог болох эрсдэлтэй",
    number: "3",
    too: "6",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/510/images/c/2024/12/325835-09122024-1733733601-733928945-malgai1.jpg",
    title:
      "Б.Номин-Эрдэнэ: Сэтгэл гутраад байна гэх хүмүүс олон болжээ. Гэвч энэ хэвийн зүйл биш",
    number: "72",
    too: "2",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/510/images/c/2024/12/325729-06122024-1733452984-24763154-nominerdene1-215401-159668920720241205215407.jpeg",
    title:
      "С.Одонтуяа: Багануурын уурхайг түшиглэн коксжсон буюу хөх нүүрсний үйлдвэр байгуулна",
    number: "72",
    too: "18",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325972-12122024-1733987443-166226999-675a7c3fe90d113800221673.jpg",
    title:
      "BNEF: 2024 оны дэлхийн цахилгаан автомашины нийлүүлэлт 26 хувиар өсөж, 17.2 сая хүрэхээр байна",
    number: "501",
    too: "12",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325853-10122024-1733792900-1682986715-4800.jpg",
    title:
      "Google хэдэн сая жил шаардлагатай асуудлыг 5 минутад шийдэх чипээ танилцууллаа",
    number: "3",
    too: "6",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325753-06122024-1733459815-889429080-f19231e1-9e37-458f-9115-f5d7f5f29319.jpg",
    title:
      "BNEF: БНЭУ ногоон технологийн санхүүжилтээр БНХАУ-ыг гүйцэж, дэлхийд хоёрдугаарт бичигдэж эхэллээ",
    number: "72",
    too: "2",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325672-04122024-1733302862-438209611-B.Bat-Ulzii_0411.JPG",
    title:
      "BNEF: БНЭУ ногоон технологийн санхүүжилтээр БНХАУ-ыг гүйцэж, дэлхийд хоёрдугаарт бичигдэж эхэллээ",
    number: "72",
    too: "18",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/comic/2023/06/21/3773/comic-153411-688093610.jpeg",
    title: "Нэг өрөөнд хамт хэвтсэн энэ хэцүү хүний ДАТА ДУУСААСАЙ",
    number: "126",
    too: "",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/comic/2023/05/03/3772/hugjliin_bank-184555-1805228234.jpeg",
    title: "Хөгжлийн банкны шүүгдэгчдийн хөөрхийлөлтэй мэдүүлгүүд",
    number: "28",
    too: "",
  },
];

const Catecard = ({ image, text, title, number, too }) => {
  return (
    <div className="catocard">
      <div
        className="catocard-bg"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <p className="hidden">{text}</p>
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
