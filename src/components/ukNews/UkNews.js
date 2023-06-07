import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function filterData(searchText, ukdata) {

  return ukdata.filter((data) =>
    data.title.toLowerCase().includes(searchText.toLowerCase())
  );
}

const UkNews = () => {

  const [ukdata, setUkdata] = useState([]);
  const [filtereddata, setfiltereddata] = useState([]);
  const [searchText, setsearchText] = useState("");

  async function getNews() {
    const res = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ad7c3887acca4630a560f4f8d0fbea02");
    const { articles } = await res.json();
    setUkdata(articles)
    setfiltereddata(articles)

  }

  useEffect(() => {
    getNews()
  }, [])


  if (!ukdata) return null;

  return ukdata.length === 0 ? <div>Loading</div> : (

    <div className='w-full '>
      <h1 className='font-bold text-xl'>Top News from BBC</h1>

      {/* Search Field */}
      <input type="text" placeholder='search news' value={searchText}
       onChange={(e) => setsearchText(e.target.value)} 
       className="border-2 border-gray-500"/>

      <button
        onClick={() => {
          const data = filterData(searchText, ukdata);
          setfiltereddata(data);
        }}
        className="border-2 border-black px-1 font-bold"
      >
        Search
      </button>

      {/* Cards */}
      <section className='w-[90%] flex flex-wrap gap-x-10 gap-y-10 m-auto mt-10'>
        {
          filtereddata.length == 0 ? (
            <h1>No News match your Filter</h1>
          ) :
            (filtereddata.map((news) => (
              <div key={news.publishedAt} className='w-96 border-2 border-gray-200 p-2'>
                <h2 className='h-16 font-bold text-lg'>{news.title}</h2>
                <img src={news.urlToImage} alt="british news" />
                <p className='leading-5 font-medium text-gray-500'>{news.description}</p>
                <Link to={"/newsdetail/" + news.publishedAt+"uk"} ><button className='font-medium text-lg border-2 border-black px-2 rounded-sm mt-2'>Read More</button></Link>
              </div>
            )))
        }
      </section>
    </div>
  )
}

export default UkNews