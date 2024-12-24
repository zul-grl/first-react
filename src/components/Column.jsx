const Column = ({ combinedArray }) => {
  return (
    <div className="rowright">
      <div>
        <div>
          <img
            src="https://mgl.gogo.mn//newsn/v4/images/highlightnews.4812c9a7.png"
            width="25"
            alt=""
            style={{ height: 30 }}
          />
          Онцлох мэдээ
        </div>
        {combinedArray.slice(0, 4).map((props) => {
          return (
            <div>
              <div className="card">
                <div
                  className="card-bg"
                  style={{ backgroundImage: `url(${props.image})` }}
                >
                  <p>{props.text}</p>
                </div>
                <div>
                  <p className="cardtext">{props.title}</p>
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
                    <span>{props.number}</span>
                    <div>
                      <img
                        src="https://mgl.gogo.mn//newsn/v4/images/time-gray.9098dcef.svg"
                        style={{ width: 13, height: 13 }}
                        alt=""
                      />
                      <p>{props.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {combinedArray.slice(0, 10).map((props) => {
          return (
            <div>
              <div>{props.homenum}</div>
              <div>
                <p>{props.summary}</p>
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
                  <span>{props.comments}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Column;
