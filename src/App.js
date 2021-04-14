import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <main role="main">
        <div className="container"></div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
