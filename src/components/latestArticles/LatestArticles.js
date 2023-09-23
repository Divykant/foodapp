import React from "react";
import Slider from "react-slick";
import "./LatestArticles.css";
import Tomato from "../../assets/tomato.jpg";
import Salad from "../../assets/salad.jpg";
import Lunch from "../../assets/lunch.jpg";
import Grill from "../../assets/grill.jpg";
import Wrap from "../../assets/wrap.jpg";
import Cup from "../../assets/cup.jpg";

const LatestArticles = () => {
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

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // Other settings for the slider
  };

  return (
    <section className="latestArticles">
      <h2 className="latestArticles-heading">Latest Articles</h2>
      <div className="latestArticles-sliderDiv">
        {/* <Slider {...settings}> */}
        {articles.map((article, index) => (
          <div key={index} className="latestArticles-sliderDiv-CardDiv">
            <img
              className="latestArticles-sliderDiv-CardDivImg"
              src={article.img}
              alt="tomato img"
            />
            <h3 className="latestArticles-sliderDiv-CardDivHeading">
              {article.title}
            </h3>
            <p className="latestArticles-sliderDiv-CardDivPara">
              {article.para}{" "}
            </p>
            <button className="latestArticles-sliderDiv-CardDivButton">
              read more
            </button>
          </div>
        ))}
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default LatestArticles;
