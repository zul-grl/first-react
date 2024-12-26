import { useState } from "react";
const images = [
  "https://mgl.gogo.mn/banner_gogo/banner/2024/12/09/news-b3/videourl/1733736457/760%20270%20gogo.png",
  "https://mgl.gogo.mn/banner_gogo/banner/2024/12/24/news-b3/videourl/1734998632/Gogo%20760x270.jpg",
  "https://mgl.gogo.mn/banner_gogo/banner/2024/12/20/news-b3/videourl/1734652662/%D0%AE%D0%BD%D0%B8%D0%B2%D0%B8%D1%88%D0%BD%D1%8D%D1%8D%D1%81-%D0%BA%D0%B8%D0%BD%D0%BE-%D2%AF%D0%B7%D0%B4%D1%8D%D0%B3-%D3%A9%D0%B4%D3%A9%D1%80_gogo-banner_760x270-02.png",
];
export default function Slider() {
  const [image, setimage] = useState(images[0]);
  return (
    <div className="ads" style={{ backgroundImage: `url(${image})` }}>
      <div className="dotcontainer">
        <div>
          {images.map((img) => {
            return (
              <button
                className="dot"
                onClick={() => setimage(img)}
                style={{
                  backgroundColor: "#0159f0",
                  opacity: img === image ? 3 : 0.5,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
