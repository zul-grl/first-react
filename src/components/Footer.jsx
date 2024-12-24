const Footerithem = [
  {
    image: "https://mgl.gogo.mn/newsn/v4/images/tech.a4b28dbb.png",
    text: "Бидний тухай",
  },
  {
    image: "https://mgl.gogo.mn/newsn/v4/images/surtalchilgaa.2f9ee07e.png",
    text: "Сурталчилгаа байршуулах",
  },
  {
    image: "https://mgl.gogo.mn/newsn/v4/images/redakts.41ba2bab.png",
    text: "Редакцийн ёс зүй",
  },
  {
    image: "https://mgl.gogo.mn/newsn/v4/images/nuutslal.e823e529.png",
    text: "Нууцлалын бодлого",
  },
  {
    image: "https://mgl.gogo.mn/newsn/v4/images/holboo.99f66db8.png",
    text: "Холбоо барих",
  },
];
const Footer = (props) => {
  return (
    <div className="content">
      <footer>
        <div>
          {Footerithem.map((ithem) => {
            return (
              <div>
                <img src={ithem.image} alt="" style={{ width: 15 }} />
                <p>{ithem.text}</p>
              </div>
            );
          })}
        </div>
        <div></div>
      </footer>
    </div>
  );
};
export default Footer;
