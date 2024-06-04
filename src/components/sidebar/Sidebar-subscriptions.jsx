import "./Sidebar-subscriptions.scss";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import user5 from "../../assets/images/user5.png";
import user6 from "../../assets/images/user6.png";

const SidebarSubscriptions = () => {
  const users = [
    {
      id: 1,
      img: user1,
      title: "Gussie Singleton",
    },
    {
      id: 2,
      img: user2,
      title: "Nora Francis",
    },
    {
      id: 3,
      img: user3,
      title: "Belle Briggs",
    },
    {
      id: 4,
      img: user4,
      title: "Eunice Cortez",
    },
    {
      id: 5,
      img: user5,
      title: "Emma Hanson",
    },
    {
      id: 6,
      img: user6,
      title: "Leah Berry",
    },
  ];

  return (
    <div className="sidebar__subscriptions">
      <h3 className="sidebar__subscriptions-title">Subscriptions</h3>

      <div className="sidebar__subscriptions-lists">
        {users.map((user) => (
          <a href="/" className="sidebar__subscriptions-user" key={user.id}>
            <img src={user.img} alt={user.title} />
            <p>{user.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarSubscriptions;
