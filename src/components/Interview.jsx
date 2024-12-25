import React from "react";

const newsList = [
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/np/2022/10/31/tsas_ulaanbaatar_gudamj_tsastaigudamj_tsastseverelgee_tseverlegee_-16-115542-21288800661.jpeg",
    tag: "СОЁЛЫН ДОВТОЛГОО",
    title:
      "СОЁЛЫН ДОВТОЛГОО №66: Хотоо хөлдүү 'пица'-гаар чимчихгүйхэн шинэ жилдэх юм сан",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/np/2024/11/19/5221475/gutal%20ohin-175000-19154631021-180406-2004306656.jpeg",
    tag: "ГУТАЛ",
    title: "ГУТАЛ: #32: 'Хөлийн чинь зураг байгаад шүү, хөөрхөн өө'",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/11/-01112024-1730454760-2040900969-laa-61.jpg",
    tag: "ГАРААНЫ БИЗНЕС",
    title: "Т.Диймаа: Хүн галыг эрчмээ лаагаар нөхөх боломжтой",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/10/324302-27102024-1730039775-1102321352-0P3A16781.jpg",
    tag: "ЭЛЧИН САЙД",
    title:
      "Элчин сайд Ина Марчюлёните: Залуусыг уриалж, зөв зүйлд чиглүүлж чаддаг сайн удирдагчид хэрэгтэй",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/10/323921-16102024-1729077905-1946325810-B61A3286.MOV_snapshot_00.06.3601.jpg",
    tag: "ХҮНИЙ ТҮҮХ",
    title:
      "Д.Бямбасүрэн: Ю.Цэдэнбал гуай нягтлан бодох мэргэжилтэй тул эдийн засаг тайлбарлахад маш амар байв",
  },
];

const NewsFeed = () => {
  return (
    <div className="content">
      <div className="news-feed">
        <h2 className="imgtitle">
          <img
            src="https://mgl.gogo.mn//newsn/v4/images/interview.b47c0f6b.png"
            style={{ width: "20px", height: 25 }}
          />
          Ярилцлага
        </h2>
        <div className="news-layout">
          <div
            className="large-card"
            style={{ backgroundImage: `url(${newsList[0].image})` }}
          >
            <div className="gradient">
              <div className="tag">{newsList[0].tag}</div>
              <div className="title">{newsList[0].title}</div>
              <div className="detail">
                ДЭЛГЭРЭНГҮЙ{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10px"
                  viewBox="0 0 448 512"
                  fill="white"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="small-cards">
            {newsList.slice(1, 5).map((item) => (
              <div
                className="small-card"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="gradient">
                  <div className="tag">{item.tag}</div>
                  <div className="title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default NewsFeed;
