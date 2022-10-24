import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumaryCard from '../Shared/NewsSummaryCard/NewsSumaryCard';

const Category = () => {
    const categoryNews =useLoaderData()
    return (
        <div>
          {
            categoryNews.map(news =><NewsSumaryCard
            key ={news._id}
            news={news}
            ></NewsSumaryCard>)
          }
        </div>
    );
};

export default Category;