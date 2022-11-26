import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Pform from "./components/Pform";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pform />
    </div>
  );
}

export default App;
