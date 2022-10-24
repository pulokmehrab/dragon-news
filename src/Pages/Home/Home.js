import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumaryCard from '../Shared/NewsSummaryCard/NewsSumaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h1>this is home {allNews.length}</h1>
            {
             allNews.map(news=><NewsSumaryCard
              key={news._id}
              news ={news}
             >

             </NewsSumaryCard>)      
            }
        </div>
    );
};

export default Home;