import React from "react";
import "./ArticleCard.css";
const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard-sliderDiv-CardDiv">
      <img
        className="articleCard-sliderDiv-CardDivImg"
        src={article.img}
        alt={article.title}
      />
      <h2 className="articleCard-sliderDiv-CardDivHeading">{article.title}</h2>
      <p className="articleCard-sliderDiv-CardDivPara">{article.para}</p>
      <button className="articleCard-sliderDiv-CardDivButton">Read more</button>
    </div>
  );
};

export default ArticleCard;
