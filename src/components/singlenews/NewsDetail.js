import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import NewsCard from './NewsCard';


const NewsDetail = () => {
    const {id} = useParams();   // parmas = timestamp+country(.e uk/us)
    const [singleNews,setSingleNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        
         const country = checkcountry() // getting the country from params
         const timestamp = id.slice(0,-2);  // separating timestamp from params
        country == "uk"? getNewsuk(timestamp) : getNewsus(timestamp)
        
    },[id])

    function checkcountry(){
      return id.slice(-2);
    }

    async function getNewsuk(id){
      try {
        const res = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ad7c3887acca4630a560f4f8d0fbea02");
        const { articles } = await res.json();
        const filteredNews = articles.find(news => id === news.publishedAt);  //filtering single news from uk news
        setSingleNews(filteredNews);
        setLoading(false);
    } catch (err) {
        console.error(err);
        setLoading(false);
    }
      
  }

  async function getNewsus(id){
    try {
      const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ad7c3887acca4630a560f4f8d0fbea02");
      const { articles } = await res.json();
      const filteredNews = articles.find(news => id === news.publishedAt);  // filtering single news from usa news
      setSingleNews(filteredNews);
      setLoading(false);
  } catch (err) {
      console.error(err);
      setLoading(false);
  }
    
}
  
  if (loading) {
    return <div>Loading...</div>;
}
   return(
    <div>
      {singleNews && <NewsCard value={singleNews} />}
    </div>
   )
}

export default NewsDetail