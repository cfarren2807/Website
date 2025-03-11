import React from "react";
import "./Outreach.css";

const articles = [
  {
    title: "Article 1",
    image: "assets/UKSEDS1.jpg",
    category: "ARTICLE",
    time: "5 MIN READ",
    size: "large",
  },
  {
    title: "Article 2",
    image: "assets/UKSEDS2.jpg",
    category: "BLOG",
    time: "4 MIN READ",
    size: "medium",
  },
  {
    title: "Article 3",
    image: "assets/UKSEDS3.jpg",
    category: "ARTICLE",
    time: "2 MIN READ",
    size: "small",
  },

];

const circularArticles = [
  {
    title: "Article 1",
    image: "assets/UKSEDS1.jpg",
    category: "ARTICLE",
    time: "6 MIN READ",
  },
  {
    title: "Article 1",
    image: "assets/UKSEDS2.jpg",
    category: "IMAGE ARTICLE",
    time: "1 MIN READ",
  },
  {
    title: "Article 1",
    image: "assets/UKSEDS3.jpg",
    category: "BLOG",
    time: "1 MIN READ",
  },
  {
    title: "Article 1",
    image: "assets/UKSEDS4.jpg",
    category: "ARTICLE",
    time: "5 MIN READ",
  },
];

const Outreach = () => {
  return (
    <div className="article-grid">
      {/* Main Articles */}
      <div className="article-container">
        {articles.map((article, index) => (
          <div key={index} className={`article-card ${article.size}`}>
            <img src={article.image} alt={article.title} />
            <div className="article-overlay">
              <p className="article-category">{article.category}</p>
              <p className="article-time">{article.time}</p>
              <h3 className="article-title">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Circular Articles */}
      <div className="circular-articles">
        {circularArticles.map((article, index) => (
          <div key={index} className="circular-article">
            <img src={article.image} alt={article.title} />
            <div className="text">
              <p className="article-category">{article.category}</p>
              <p className="article-time">{article.time}</p>
              <h4 className="article-title">{article.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outreach;
