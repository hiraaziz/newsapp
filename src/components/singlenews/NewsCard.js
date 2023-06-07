import React from 'react'

const NewsCard = ({value}) => {
 
  return (
    <div className='w-full'>
     
          <div className='w-[60%] m-auto'>
          <h1 className='font-bold text-lg'>{value.title}</h1>
          <img src={value.urlToImage} alt={value.title} className='w-[700px] h-[500px]'/>
          <p className='w-[70%]'>{value.content}</p>
          </div>
  </div>
  )
}

export default NewsCard