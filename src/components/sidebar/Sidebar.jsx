import "./Sidebar.scss";
import menu from "../../assets/icons/menu.svg";
import sidebarLogo from "../../assets/images/logo-black.png";
import settingsImg from "../../assets/icons/settings.svg";
import SidebarLists from "./Sidebar-lists";
import SidebarSubscriptions from "./Sidebar-subscriptions";

function Sidebar() {
  return (
    <section id="sidebar">
      <div className="sidebar__menu">
        <div className="sidebar__logo">
          <img src={menu} alt="sidebar menu" />
          <a href="/">
            <img src={sidebarLogo} alt="sidebar logo" />
          </a>
        </div>
      </div>

      <div className="sidebar__content">
        <SidebarLists />
        <SidebarSubscriptions />

        <a href="/" className="settings">
          <img src={settingsImg} alt="settings icon" />
          <p>Settings</p>
        </a>
      </div>
    </section>
  );
}

export default Sidebar;
