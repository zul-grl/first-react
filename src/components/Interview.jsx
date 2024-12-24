import React from "react";

const newsList = [
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/np/2022/10/31/tsas_ulaanbaatar_gudamj_tsastaigudamj_tsastseverelgee_tseverlegee_-16-115542-21288800661.jpeg",
    tag: "СОЁЛЫН ДОВТОЛГОО",
    title:
      "СОЁЛЫН ДОВТОЛГОО №66: Хотоо хөлдүү 'пица'-гаар чимчихгүйхэн шинэ жилдэх юм сан",
    description: "ДЭЛГЭРЭНГҮЙ",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/np/2022/10/31/tsas_ulaanbaatar_gudamj_tsastaigudamj_tsastseverelgee_tseverlegee_-16-115542-21288800661.jpeg",
    tag: "ГУТАЛ",
    title: "ГУТАЛ: #32: 'Хөлийн чинь зураг байгаад шүү, хөөрхөн өө'",
    description: "ДЭЛГЭРЭНГҮЙ",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/np/2022/10/31/tsas_ulaanbaatar_gudamj_tsastaigudamj_tsastseverelgee_tseverlegee_-16-115542-21288800661.jpeg",
    tag: "ГАРААНЫ БИЗНЕС",
    title: "Т.Диймаа: Хүн галыг эрчмээ лаагаар нөхөх боломжтой",
    description: "ДЭЛГЭРЭНГҮЙ",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/np/2022/10/31/tsas_ulaanbaatar_gudamj_tsastaigudamj_tsastseverelgee_tseverlegee_-16-115542-21288800661.jpeg",
    tag: "ЭЛЧИН САЙД",
    title: "Элчин сайд Ина Марчюлене: Зөв зүйлд залуусыг уриалж...",
    description: "ДЭЛГЭРЭНГҮЙ",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/np/2022/10/31/tsas_ulaanbaatar_gudamj_tsastaigudamj_tsastseverelgee_tseverlegee_-16-115542-21288800661.jpeg",
    tag: "ХҮНИЙ ТҮҮХ",
    title: "Д.Бямбасүрэн: Ю.Цэдэнбал гуай эдийн засаг тайлбарлахад маш сайн",
    description: "ДЭЛГЭРЭНГҮЙ",
  },
];

const NewsFeed = () => {
  return (
    <div className="content">
      <div className="news-feed">
        <h2>Ярилцлага</h2>
        <div className="news-layout">
          <div className="large-card">
            <img src={newsList[0].image} alt="" />
            <div className="tag">{newsList[0].tag}</div>
            <div className="title">{newsList[0].title}</div>
            <div className="detail">{newsList[0].detail}</div>
          </div>
          <div className="small-cards">
            {newsList.slice(0, 4).map((item) => (
              <div className="small-card">
                <img src={item.image} alt="" />
                <div className="tag">{item.tag}</div>
                <div className="title">{item.title}</div>
                <div className="detail">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default NewsFeed;
