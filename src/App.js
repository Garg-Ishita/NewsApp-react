import { useEffect, useState } from "react";
import "./App.css";
import NavbarInshorts from "./components/NavbarInshorts";
import NewsContent from "./components/NewsContent";
import axios from "axios";
import apikey from "./data/config";
import Footer from "./components/Footer";
function App() {
  const [category, setCategory] = useState("General");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setnewsResult] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setnewsResult(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResult, category, loadMore]);
  return (
    <div className="App">
      <NavbarInshorts setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResult={newsResult}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
