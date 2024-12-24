const cardarr = [
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
];
const Section = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <div className="content">
        <div className="section">
          <div className="health">
            <div className="healthleft">
              <button>Эрүүл мэнд</button>
              <h2>Хөрсөнд ургасан бүхэн органик биш</h2>
              <p>
                Эх орны шимт хөрсөнд ургасан бүхнийг органик хүнс гэж боддог
                байв. Тиймээс ч хүнсний дэлгүүр бүрээс органик ногоо авч болно
                хэмээн итгэдэг байлаа. Гэвч энэ бодол маань ташаа байсныг,
                яагаад бүх хүнс органик биш вэ гэдгийг мэдсэнээ..
              </p>
              <div>
                <img src="./share.svg" alt="" />
                <span>71</span>
              </div>
            </div>
            <div className="healthright">
              <p>Дэлгэрэнгүй унших</p>
            </div>
          </div>

          <div className="sectionCards">
            {cardarr.map((props) => (
              <div className="card">
                <div
                  className="card-bg"
                  style={{ backgroundImage: `url(${props.image})` }}
                >
                  <p>{props.text}</p>
                </div>
                <div>
                  <p className="cardtext">{props.title}</p>
                  <div className="cardsvg">
                    <img src="./share.svg" alt="" />
                    <span>{props.number}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="card">
              <img
                src="https://mgl.gogo.mn/banner_gogo/banner/2024/12/18/news-b2/videourl/1734506915/externaal%20web_13.%20gogo.mn.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
