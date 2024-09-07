import Sidebar from "./component/Sidebar";
import Home from "./pages/Home";

const App = () => {
  return (
    <section id="main" className="grid grid-cols-7">
      <Sidebar />
      <Home />
    </section>
  );
};

export default App;
