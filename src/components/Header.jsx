const headertext = ["Мэдээ", "GoGo булан", "Үзэх", "Хэв маяг"];
const weather = [
  {
    text: "Цаг агаар",
    imgurl: "https://mgl.gogo.mn/newsn/v4/images/sun-icon.b61be7df.svg",
    number: "-15",
  },
  {
    text: "Зурхай",
    imgurl: "https://mgl.gogo.mn/newsn/v4/images/calendar-icon.ff84145b.svg",
    number: "12.20",
  },
  {
    text: "Валютын ханш",
    imgurl: "./dollar-symbol.png",
    number: "3417₮",
  },
];
const Header = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <div className="content">
        <div className="header">
          <div className="headerleft">
            <img
              src="https://mgl.gogo.mn/newsn/v4/images/gogo-logo.345096b3.png"
              alt=""
            />
            <div>
              {headertext.map((text) => (
                <>
                  <div className="arrow">
                    <p>{text}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="12"
                      height="12"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </div>
                </>
              ))}
              <div className="arrow">
                <p>English</p>
              </div>
            </div>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="search"
            >
              <circle
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                cx="9"
                cy="9"
                r="7"
              ></circle>
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                d="M14,14 L18,18 L14,14 Z"
              ></path>
            </svg>
          </div>
          <div className="weather">
            {weather.map((props) => (
              <div>
                <p>{props.text}</p>
                <div className="weatheritem">
                  <img
                    style={{ maxWidth: 20, maxheight: 20 }}
                    src={props.imgurl}
                    alt=""
                  />
                  <p>{props.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
