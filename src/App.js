import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main role="main" className="flex-shrink-0">
        <div className="container"></div>
      </main>
      <Footer />
    </div>
  );
}
