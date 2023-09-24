import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticleCard from "./component/articleCard/ArticleCard";

const LatestArticle = ({ articles }) => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 100,
    arrows: true,
  };

  return (
    <div className="article-carousel">
      <Slider {...settings}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Slider>
    </div>
  );
};

export default LatestArticle;
