import { cardarr } from "../arrays/section";
const Section = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <div className="content">
        <div className="section">
          <div className="health">
            <div className="healthleft">
              <button className="yellow">Эрүүл мэнд</button>
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
              <p className="hidden">Дэлгэрэнгүй унших →</p>
            </div>
          </div>

          <div className="sectionCards">
            {cardarr.map((props) => (
              <div className="carditem">
                <div
                  className="card-bg"
                  style={{ backgroundImage: `url(${props.image})` }}
                >
                  <p className="hidden">Унших →</p>
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
