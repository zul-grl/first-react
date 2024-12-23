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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#c4c4c4"
                    d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                  />
                </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="13px"
                    >
                      <path
                        fill="#c4c4c4"
                        d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                      />
                    </svg>
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
