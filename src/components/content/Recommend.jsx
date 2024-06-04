import "./Recommend.scss";

import recommendVideo1 from "../../assets/images/recommend1.png";
import recommendVideo2 from "../../assets/images/recommend2.png";
import recommendVideo3 from "../../assets/images/recommend3.png";

const Recommend = () => {
  const recommendVideos = [
    {
      id: 1,
      img: recommendVideo1,
      videoLength: "3:40",
      title: "Dude You Re Getting A Telescope",
      text1: "34k views  ·  5 months ago",
      text2: "Gussie French",
    },
    {
      id: 2,
      img: recommendVideo2,
      videoLength: "2:12",
      title: "Moon Gazing",
      text1: "54k views  ·  11 months ago",
      text2: "Edward Osborne",
    },
    {
      id: 3,
      img: recommendVideo3,
      videoLength: "2:12",
      title: "Moon Gazing",
      text1: "125k views  ·  4 months ago",
      text2: "Dollie Blair",
    },
  ];
  return (
    <div className="recommend__videos">
      {recommendVideos.map((video) => (
        <div className="recommend__video" key={video.id}>
          <a href="/" className="recommend__video-content">
            <img src={video.img} alt={video.title} />
            <span>{video.videoLength}</span>
          </a>

          <div className="recommend__video-text">
            <h2>{video.title}</h2>
            <div className="recommend__video-descr">
              <p>{video.text1}</p>
              <p>{video.text2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommend;
