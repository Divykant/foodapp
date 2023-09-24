import "./App.css";
import Header from "./components/header/Header";
import AboutUs from "./components/aboutUs/AboutUs";
import LatestArticles from "./components/latestArticles/LatestArticles";
import Footer from "./components/footer/Footer";
// import ArticleCarousel from './ArticleCarousel';
import Tomato from "./assets/tomato.jpg";
import Salad from "./assets/salad.jpg";
import Lunch from "./assets/lunch.jpg";
import Grill from "./assets/grill.jpg";
import Wrap from "./assets/wrap.jpg";
import Cup from "./assets/cup.jpg";
const articles = [
  {
    id: 1,
    img: Tomato,
    title: "Grilled Tomatoes",
    para: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    button: "read more",
  },
  {
    id: 2,
    img: Salad,
    title: "Snacks for Travel",
    para: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    button: "read more",
  },
  {
    id: 3,
    img: Lunch,
    title: "Post-workout Recipes",
    para: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    button: "read more",
  },
  {
    id: 4,
    img: Grill,
    title: "How To Grill Corn",
    para: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    button: "read more",
  },
  {
    id: 5,
    img: Wrap,
    title: "Crunchwrap Supreme",
    para: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    button: "read more",
  },
  {
    id: 6,
    img: Cup,
    title: "Broccoli cheese soup",
    para: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    button: "read more",
  },
];
function App() {
  return (
    <div className="App">
      <h1>food app</h1>
      <Header />
      <AboutUs />
      <LatestArticles articles={articles} />
      {/* <ArticleCarousel  /> */}
      <Footer />
    </div>
  );
}

export default App;
