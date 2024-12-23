import Column from "./Column";
const newsData = [
  {
    homenum: 1,
    date: "12 сарын 21",
    title: "Өнөөдөр цас орохгүй, цаг агаар тогтуун байна",
    summary: "Өнөөдөр нийт нутгаар цас орохгүй, цаг агаар тогтуун байна.",
    time: "2 цагийн өмнө",
    comments: 11,
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
  },
  {
    homenum: 2,
    date: "12 сарын 20",
    title:
      "Баярын худалдааны үеэр олныг машинаар дайрсны улмаас 2 хүн амиа алдаж, 68 хүн бэртжээ",
    summary:
      "Германы Магдебург хотод өчигдөр буюу 2024 оны 12-р сарын 20-нд болж, Зул сарын зах дээр нэгэн автомашин олон хүнийг дайрч...",
    time: "21 минутын өмнө",
    comments: 0,
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
  },
  {
    homenum: 3,
    date: "12 сарын 20",
    title:
      "Эрдэнэс Тавантолгойн ногдол ашиг 121500 төгрөгийг иргэдийн дансанд шилжүүллээ",
    summary:
      "Ерөнхий сайд Л.Оюун-Эрдэнэ өчигдөр мэдээлэл хийхдээ Эрдэнэс Тавантолгой компанийн 12-р сарын 20-ны байдлаар 4.3 их наяд төгрөгийн ашигтай ажилласан.",
    time: "2 цагийн өмнө",
    comments: 316,
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
  },
  {
    homenum: 4,
    date: "12 сарын 20",
    title:
      "Л.Оюун-Эрдэнэ: Иргэн бүр 350 мянган төгрөгийн ногдол ашиг хүртэх боломж бүрдсэн",
    summary:
      "Ерөнхий сайд Л.Оюун-Эрдэнэ мэдээлэл хийхдээ Монгол Улсын иргэн бүрд ногдол ашиг олгох тухай дурдсан.",
    time: "Өчигдөр",
    comments: 625,
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
  },
  {
    homenum: 5,
    date: "12 сарын 19",
    title: "Төмөр замын төв буудлын нүхэн гарц урсдаг замтай боллоо",
    summary:
      "Улаанбаатар хотын төмөр замын төв буудалд шинэчлэлийн ажил хийгдэж, урсдаг зам ашиглалтад орлоо.",
    time: "2024-12-19 16:45",
    comments: 1709,
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
  },
  {
    homenum: 6,
    date: "12 сарын 19",
    title: "2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    summary:
      "2025 оноос хэрэгжих шинэ хууль, тогтоолуудын талаар дэлгэрэнгүй танилцуулга хүргэж байна.",
    time: "2024-12-19 08:36",
    comments: 156,
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
  },
  {
    homenum: 7,
    date: "12 сарын 18",
    title: "ЦЕГ: Реппер Roockie-г олж тогтоон шалгаж байна",
    summary:
      "Цагдаагийн ерөнхий газраас мэдээлснээр Реппер Roockie-г хуулийн дагуу шалгаж байгаа тухай мэдэгдэв.",
    time: "2024-12-19 10:21",
    comments: 98,
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
  },
  {
    homenum: 8,
    date: "12 сарын 19",
    title: "Төмөр замын төв буудлын нүхэн гарц урсдаг замтай боллоо",
    summary:
      "Улаанбаатар хотын төмөр замын төв буудалд шинэчлэлийн ажил хийгдэж, урсдаг зам ашиглалтад орлоо.",
    time: "2024-12-19 16:45",
    comments: 1709,
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
  },
  {
    homenum: 9,
    date: "12 сарын 19",
    title: "2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    summary:
      "2025 оноос хэрэгжих шинэ хууль, тогтоолуудын талаар дэлгэрэнгүй танилцуулга хүргэж байна.",
    time: "2024-12-19 08:36",
    comments: 156,
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
  },
  {
    homenum: 10,
    date: "12 сарын 18",
    title: "ЦЕГ: Реппер Roockie-г олж тогтоон шалгаж байна",
    summary:
      "Цагдаагийн ерөнхий газраас мэдээлснээр Реппер Roockie-г хуулийн дагуу шалгаж байгаа тухай мэдэгдэв.",
    time: "2024-12-19 10:21",
    comments: 98,
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
  },
];
const cardarr = [
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
    title:
      "Л.Оюун-Эрдэнэ: Иргэн бүр 350 мянган төгрөгийн ногдол ашиг хүртэх боломж бүрдсэн",

    number: "501",
    time: " 1 цагийн өмнө",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/-20122024-1734662229-860155718-mobi_nuur2.jpg",
    title:
      "Дэлхийн 200 гаруй улсад ашиглаж болох Global Data eSim-ний талаар та юу мэдэх ёстой вэ",

    number: "3",
    time: " 10 цагийн өмнө",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/-20122024-1734668987-2102376822-odontuya1.jpeg",
    title:
      "С.Одонтуяа: Багануурын уурхайг түшиглэн коксжсон буюу хөх нүүрсний үйлдвэр байгуулна",

    number: "72",
    time: " 4 цагийн өмнө",
  },
  {
    text: "унших",
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326228-20122024-1734675686-1718261107-7.jpg",
    title:
      "Л.Оюун-Эрдэнэ: Иргэн бүр 350 мянган төгрөгийн ногдол ашиг хүртэх боломж бүрдсэн",

    number: "501",
    time: " 1 цагийн өмнө",
  },
];
const combinedArray = [...newsData, ...cardarr];
console.log(combinedArray);
const Card = ({ image, text, title, number, time }) => {
  return (
    <div className="card2">
      <div className="cardbg2" style={{ backgroundImage: `url(${image})` }}>
        <p>{text}</p>
      </div>
      <div>
        <p className="card2text">{title}</p>
        <div className="card2svg">
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
          <span>{number}</span>
          <div>
            <img
              src="https://mgl.gogo.mn//newsn/v4/images/time-gray.9098dcef.svg"
              width="15px"
              alt=""
            />
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RowContainer = () => {
  return (
    <div className="rowcontainer">
      <div className="container">
        {cardarr.slice(0, 4).map((medee) => (
          <Card
            image={medee.image}
            text={medee.text}
            title={medee.title}
            number={medee.number}
            time={medee.time}
          />
        ))}

        <img
          src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/bfe643d1-36ba-4da7-8217-521d83e28491.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241219%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241219T122212Z&X-Goog-Expires=86399&X-Goog-Signature=34285f4678149de738e8212a8f8ff32c2bf65382cdfd4e172cf49608fbdce5c212b1bd456082f631c2aba83c1ad40f19a40b897e2e8220ae6f941d2e5f270215fce63514516e0e9ee293a49780d5741401fcdd51d47a03019c55b3f97ca3c34cea727091d313937f89a4ca5997030795061b6488422265db58ad130a46b19e733623540595fd5e40041d32f37c4249fc30683c9944ce0682006de18f0b5ebf756398ae7f3dbdcc596a1b5e7c93efee56f68290980b73fd00dccc3d27170c33298edbba9019f2a08c3904a9a164c1667f39a898178797a856d972affea31ebdeeb21f3f279b6c289f05b3a2829528a95e828197240f2f2e2c4760603bec7c2738&X-Goog-SignedHeaders=host"
          alt=""
          style={{
            width: "100%",
            maxWidth: "780px",
            aspectRatio: "780/126",
            marginBottom: "22px",
          }}
        />

        {cardarr.slice(0, 4).map((medee) => (
          <Card
            image={medee.image}
            text={medee.text}
            title={medee.title}
            number={medee.number}
            time={medee.time}
          />
        ))}

        <div
          style={{
            display: "flex",
            fontWeight: "700",
            maxWidth: "780px",
            width: "100%",
            padding: "7px 20px 6px",
            justifyContent: "center",
            backgroundColor: "#f5f8fc",
          }}
        >
          Илүү үзэх
        </div>
      </div>
      <Column combinedArray={combinedArray} />
    </div>
  );
};
export default RowContainer;
