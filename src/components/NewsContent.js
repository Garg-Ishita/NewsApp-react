import { Container } from "@mui/material";
import React from "react";
import NewsCard from "./NewsCard";
import "./NewsContent.css";
const NewsContent = ({ newsArray, newsResult, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use the inshorts app on your phone
          </span>
          <img
            src="https://cdn-icons-png.flaticon.com/128/888/888873.png"
            alt="google"
            className="play"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/0/747.png"
            alt="apple"
            className="play"
          />
        </div>
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {loadMore <= newsResult && (
          <>
            <button className="loadMore" onClick={()=>setLoadMore(loadMore+20)}>Load more</button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
