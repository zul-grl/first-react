const storyithem = [
  {
    img: "https://mgl.gogo.mn/newsn/story/mobicom-dotor-6764d99535db4822975842.jpg",
    text: "Дэлхийн 200 гаруй улсад ашиглаж болох Global Data eSim-ний талаар та юу мэдэх ёстой вэ",
    Number: "72",
  },
  {
    img: "https://mgl.gogo.mn/newsn/story/zurag-29-154219-467089760-6764cd4312901885474402.jpeg",
    text: "Хөрсөнд ургасан бүхэн органик биш",
    Number: "97",
  },

  {
    img: "https://mgl.gogo.mn/newsn/story/1-3-6764cce61c0dd664440065.jpeg",
    text: "Японы Фүкүшима хот хогоо ангилж хаяагүй иргэдийн нэрийг нийтэд мэдээлдэг болно",
    Number: "105",
  },
  {
    img: "https://mgl.gogo.mn/newsn/story/nomiinbayr-10-134724-18453572541-6764cc8ceec15160327054.jpeg",
    text: "Хүүхэд эхний удаа уншихад 20, хоёр дахиа уншихад 68 хувьтай ойлгодог&quot;",
    Number: "104",
  },
  {
    img: "https://mgl.gogo.mn/newsn/story/tog-togtasralt-18-161219-13007780191-6764cc12c64dd561938572.jpeg",
    text: "ФОТО: Хэзээ бид өвлийг тогтой, утаагүй, түгжрэлгүй, гантиг зам дээр уначихгүй давах бол",
    Number: "119",
  },
  {
    img: "https://mgl.gogo.mn/newsn/story/picture3-6763bb4641451633437386.jpg",
    text: "Эвсэг брэнд 60% хүртэл шинэ жилийн хямдралт худалдаа зарлалаа",
    Number: "311",
  },
  {
    img: "https://mgl.gogo.mn/newsn/story/mobicom-dotor-6764d99535db4822975842.jpg",
    text: "Дэлхийн 200 гаруй улсад ашиглаж болох Global Data eSim-ний талаар та юу мэдэх ёстой вэ",
    Number: "72",
  },
  {
    img: "https://mgl.gogo.mn/newsn/story/zurag-29-154219-467089760-6764cd4312901885474402.jpeg",
    text: "Хөрсөнд ургасан бүхэн органик биш",
    Number: "97",
  },

  {
    img: "https://mgl.gogo.mn/newsn/story/1-3-6764cce61c0dd664440065.jpeg",
    text: "Японы Фүкүшима хот хогоо ангилж хаяагүй иргэдийн нэрийг нийтэд мэдээлдэг болно",
    Number: "105",
  },
  {
    img: "https://mgl.gogo.mn/newsn/story/nomiinbayr-10-134724-18453572541-6764cc8ceec15160327054.jpeg",
    text: "Хүүхэд эхний удаа уншихад 20, хоёр дахиа уншихад 68 хувьтай ойлгодог",
    Number: "104",
  },
  {
    img: "https://mgl.gogo.mn/newsn/story/tog-togtasralt-18-161219-13007780191-6764cc12c64dd561938572.jpeg",
    text: "ФОТО: Хэзээ бид өвлийг тогтой, утаагүй, түгжрэлгүй, гантиг зам дээр уначихгүй давах бол",
    Number: "119",
  },
  {
    img: "https://mgl.gogo.mn/newsn/story/picture3-6763bb4641451633437386.jpg",
    text: "Эвсэг брэнд 60% хүртэл шинэ жилийн хямдралт худалдаа зарлалаа",
    Number: "311",
  },
];
const Story = (props) => {
  return (
    <div className="content">
      <div className="story">
        <div>
          GoGo
          <span>СТОРИ</span>
        </div>
        <div className="stories">
          {storyithem.map((card) => (
            <div
              className="storycard"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div>
                <img
                  src="https://mgl.gogo.mn//newsn/v4/images/author.df8ba556.svg"
                  width="30"
                  alt=""
                ></img>
              </div>
              <div className="storytext">
                <p className="cardtitle">{card.text}</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    height="12px"
                  >
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                  </svg>
                  <p>{card.Number}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Story;
