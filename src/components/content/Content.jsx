import "./Content.scss";
import searchIcon from "../../assets/icons/search.svg";
import videoIcon from "../../assets/icons/apps.svg";
import appsIcon from "../../assets/icons/video.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import userImg from "../../assets/images/userpic.png";
import user from "../../assets/images/dollie.png";
import leftIcon from "../../assets/icons/left.png";
import rightIcon from "../../assets/icons/right.png";
import UserVideos from "./User-videos";

const Content = () => {
  return (
    <div id="content">
      <div className="content__navbar">
        <form id="content-form">
          <input
            className="searchInput"
            type="search"
            name="search"
            id="searchContent"
            placeholder="Search"
          />
          <label htmlFor="searchContent">
            <img src={searchIcon} alt="search icon" />
          </label>
        </form>

        <div className="content__navbar-user">
          <div className="content__navbar-tools">
            <a href="/">
              <img src={videoIcon} alt="video icon" />
            </a>
            <a href="/">
              <img src={appsIcon} alt="apps icon" />
            </a>
            <a href="/">
              <img src={notificationIcon} alt="notification icon" />
            </a>
          </div>

          <a href="/">
            <img src={userImg} alt="user icon" />
          </a>
        </div>
      </div>

      <div className="content__videos-content">
        <div className="user__content">
          <div className="user__content-intro">
            <div className="user__content-info">
              <img src={user} alt="user img" />
              <h2>Dollie Blair</h2>
            </div>

            <div className="user__videos-controls">
              <a href="/" className="left-control">
                <img src={leftIcon} alt="left" />
              </a>
              <a href="/" className="right-control">
                <img src={rightIcon} alt="right" />
              </a>
            </div>
          </div>

          <UserVideos />
        </div>
      </div>
    </div>
  );
};

export default Content;
