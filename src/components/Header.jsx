const Header = () => {
  return (
    <nav class="header">
      <div class="first">
        <div class="logo">
          <img src="./gogo-logo.png" alt="" />
        </div>
        <div class="list">
          <b>Мэдээ</b>
          <b>GoGo булан</b>
          <b>Үзэх</b>
          <b>Хэв маяг</b>
          <b>English</b>
          <div>
            <img src="./search.png" alt="" />
          </div>
        </div>
      </div>
      <div class="weather">
        <div class="sun">
          <div>
            <p>Цаг агаар</p>
          </div>
          <div>
            <img
              src="https://mgl.gogo.mn/newsn/v4/images/sun-icon.b61be7df.svg"
              alt=""
            />
            <b>7</b>
          </div>
        </div>
        <div class="zurhai">
          <div>
            <p>Зурхай</p>
          </div>
          <div>
            <img
              src="https://mgl.gogo.mn/newsn/v4/images/calendar-icon.ff84145b.svg"
              alt=""
            />
            <b>10.29</b>
          </div>
        </div>
        <div class="money">
          <div>
            <p>Валютын ханш</p>
          </div>
          <div>
            <img src="./dollar-symbol.png" alt="" />
            <b>3403₮</b>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
