import Content from "../content/Content";
import Sidebar from "../sidebar/Sidebar";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
