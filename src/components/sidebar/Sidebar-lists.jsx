import "./Sidebar-lists.scss";
import home from "../../assets/icons/home.svg";
import tranding from "../../assets/icons/tranding.svg";
import subscriptions from "../../assets/icons/subscriptions.svg";
import library from "../../assets/icons/library.svg";
import history from "../../assets/icons/history.svg";
import watchlater from "../../assets/icons/watchlater.svg";
import favourites from "../../assets/icons/favourites.svg";
import likedvideos from "../../assets/icons/likedvideos.svg";
import music from "../../assets/icons/music.svg";
import games from "../../assets/icons/games.svg";
import showmore from "../../assets/icons/showmore.svg";

export const SidebarLists = () => {
  const lists = [
    {
      id: 1,
      img: home,
      title: "Home",
    },
    {
      id: 2,
      img: tranding,
      title: "Trending",
    },
    {
      id: 3,
      img: subscriptions,
      title: "Subscriptions",
    },
    {
      id: 4,
      img: library,
      title: "Library",
    },
    {
      id: 5,
      img: history,
      title: "History",
    },
    {
      id: 6,
      img: watchlater,
      title: "Watch later",
    },
    {
      id: 7,
      img: favourites,
      title: "Favourites",
    },
    {
      id: 8,
      img: likedvideos,
      title: "Liked videos",
    },
    {
      id: 9,
      img: music,
      title: "Music",
    },
    {
      id: 10,
      img: games,
      title: "Games",
    },
    {
      id: 11,
      img: showmore,
      title: "Show more",
    },
  ];

  return (
    <div className="sidebar__categories">
      {lists.map((category) => (
        <a href="/" className="sidebar__category" key={category.id}>
          <img src={category.img} alt={category.title} />
          <p>{category.title}</p>
        </a>
      ))}
    </div>
  );
};

export default SidebarLists;
