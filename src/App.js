import "./App.css";
import Header from "./components/header/Header";
import AboutUs from "./components/aboutUs/AboutUs";
import LatestArticles from "./components/latestArticles/LatestArticles";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <h1>food app</h1>
      <Header />
      <AboutUs />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
