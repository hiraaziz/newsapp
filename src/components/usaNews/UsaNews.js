import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function filterData(searchText, usadata) {
  return usadata.filter((data) =>
    data.title.toLowerCase().includes(searchText.toLowerCase())
  );
}

const UsaNews = () => {
  const [usadata, setUsadata] = useState([]);
  const [filtereddata, setfiltereddata] = useState([]);
  const [searchText, setsearchText] = useState("");

  async function getNews() {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=ad7c3887acca4630a560f4f8d0fbea02"
    );
    const { articles } = await res.json();
    setUsadata(articles);
    setfiltereddata(articles);
  }

  useEffect(() => {
    getNews();
  }, []);

  if (!usadata) return null;

  return usadata.length === 0 ? (
    <div>Loading</div>
  ) : (
    <div className="w-full ">
      <h1 className="font-bold text-xl">Top News from USA</h1>

      {/* Search Field */}
      <input
        type="text"
        placeholder="search news"
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
        className="border-2 border-gray-500"
      />

      <button
        onClick={() => {
          const data = filterData(searchText, usadata);
          setfiltereddata(data);
        }}
        className="border-2 border-black px-1 font-bold"
      >
        Search
      </button>

      {/* Cards */}
      <section className="w-[90%] flex flex-wrap gap-x-10 gap-y-10 m-auto mt-10">
        {filtereddata.length == 0 ? (
          <h1>No News match your Filter</h1>
        ) : (
          filtereddata.map((news) => (
            <div key={news.publishedAt} className="w-96 border-2 border-gray-200 p-2">
              <h2 className="h-16 font-bold text-lg">{news.title}</h2>
              <img src={news.urlToImage} alt="usa news" />
              <p className="leading-5 font-medium text-gray-500">{news.description}</p>
              <Link to={"/newsdetail/" + news.publishedAt+"us"}>
                <button className="font-medium text-lg border-2 border-black px-2 rounded-sm mt-2">
                  Read More
                </button>
              </Link>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default UsaNews;
