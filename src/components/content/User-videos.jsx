import "./User-videos.scss";
import video1 from "../../assets/images/Cover-1.png";
import video2 from "../../assets/images/Cover-2.png";
import video3 from "../../assets/images/Cover-3.png";
import video4 from "../../assets/images/Cover-4.png";
import video5 from "../../assets/images/Cover-5.png";
import video6 from "../../assets/images/Cover.png";

const UserVideos = () => {
  const videosList = [
    {
      id: 1,
      img: video1,
      videoLength: "4:15",
      title: "A Brief History Of Creation",
      text1: "80k views  ·  3 days ago",
      text2: "Dollie Blair",
    },
    {
      id: 2,
      img: video2,
      videoLength: "8:00",
      title: "Selecting The Right Hotel",
      text1: "123k views  ·  1 months ago",
      text2: "Dollie Blair",
    },
    {
      id: 3,
      img: video3,
      videoLength: "5:32",
      title: "Asteroids",
      text1: "43k views  ·  12 days ago",
      text2: "Dollie Blair",
    },
    {
      id: 4,
      img: video4,
      videoLength: "6:40",
      title: "Telescopes 101",
      text1: "11k views  ·  6 months ago",
      text2: "Dollie Blair",
    },
    {
      id: 5,
      img: video5,
      videoLength: "1:45",
      title: "Medical Care Is Just",
      text1: "18k views  ·  2 days ago",
      text2: "Dollie Blair",
    },
    {
      id: 6,
      img: video6,
      videoLength: "2:12",
      title: "Moon Gazing",
      text1: "67k views  ·  4 months ago",
      text2: "Dollie Blair",
    },
  ];

  return (
    <div className="user__videos">
      {videosList.map((video) => (
        <div className="user__video" key={video.id}>
          <a href="/" className="user__video-content">
            <img src={video.img} alt={video.title} />
            <span>{video.videoLength}</span>
          </a>

          <div className="user__video-text">
            <h2>{video.title}</h2>
            <div className="user__video-descr">
              <p>{video.text1}</p>
              <p>{video.te}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserVideos;
