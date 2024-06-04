import "./FoodDrinkVideos.scss";
import food1 from "../../assets/images/food1.png";
import food2 from "../../assets/images/food2.png";
import food3 from "../../assets/images/food3.png";
import food4 from "../../assets/images/food4.png";
import food5 from "../../assets/images/food5.png";
import food6 from "../../assets/images/food6.png";

const FoodDrinkVideos = () => {
  const videosList = [
    {
      id: 1,
      img: food1,
      videoLength: "7:36",
      title: "Astronomy Or Astrology",
      text1: "240k views  ·  4 months ago",
      text2: "Food & Drink",
    },
    {
      id: 2,
      img: food2,
      videoLength: "2:19",
      title: "Advertising Outdoors",
      text1: "13k views  ·  15 days ago",
      text2: "Food & Drink",
    },
    {
      id: 3,
      img: food3,
      videoLength: "9:05",
      title: "Radio Astronomy",
      text1: "1k views  ·  11 months ago",
      text2: "Food & Drink",
    },
    {
      id: 4,
      img: food4,
      videoLength: "3:40",
      title: "A Good Autoresponder",
      text1: "45k views  ·  2 months ago",
      text2: "Food & Drink",
    },
    {
      id: 5,
      img: food5,
      videoLength: "1:56",
      title: "Baby Monitor Technology",
      text1: "86k views  ·  7 days ago",
      text2: "Food & Drink",
    },
    {
      id: 6,
      img: food6,
      videoLength: "4:15",
      title: "Asteroids",
      text1: "123k views  ·  4 months ago",
      text2: "Food & Drink",
    },
  ];

  return (
    <div className="foodDrink__videos">
      {videosList.map((video) => (
        <div className="foodDrink__video" key={video.id}>
          <a href="/" className="foodDrink__video-content">
            <img src={video.img} alt={video.title} />
            <span>{video.videoLength}</span>
          </a>

          <div className="foodDrink__video-text">
            <h2>{video.title}</h2>
            <div className="foodDrink__video-descr">
              <p>{video.text1}</p>
              <p>{video.te}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodDrinkVideos;
