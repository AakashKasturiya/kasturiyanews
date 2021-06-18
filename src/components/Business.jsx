import axios from "axios";
import { useEffect, useState } from 'react';
import NewsContent from './NewsContent/NewsContent';
import apikey from '../data/config';

function Business() {

  const [newsArray,setNewsArray]=useState([])
  const [newsResults,setNewsResults] = useState();
  const [loadMore,setLoadMore]=useState(20);

  const newsApi= async()=>{
    try{
         const news=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apikey}&pageSize=${loadMore}`);
    console.log(news);

    setNewsArray(news.data.articles);
    setNewsResults(news.data.totalResults);
        }
    catch(error)
    {
      console.log(error);
    }
  };

  useEffect(()=>{
    newsApi();
  },[newsResults,loadMore]);

  return (
    <div className="Business">


<NewsContent newsArray={newsArray} newsResults={newsResults} loadMore={loadMore} setLoadMore={setLoadMore}/>

   

    </div>
  );
}

export default Business;
