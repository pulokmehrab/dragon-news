import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShare, FaEye,FaStar } from "react-icons/fa";

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const News = () => {
    const news =useLoaderData();
    const { title, author,total_view, details, image_url,rating}=news;

    return (
        <div>
             <Card className='mt-4'>
      <Card.Header><h1>{title}</h1></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <Card.Img variant="top" src={image_url}/>
           
            <p>{details}</p>
          <footer className="blockquote-footer">
          
            <div className='d-flex justify-content-between align-items-center'>
            <div>
             <Image   src={author.img}
             roundedCircle
             style={{height: '50px' }}
             ></Image>
             <div>
             <p>{author.name}</p>
             <p>{author.published_date}</p>
             </div>
             </div>
             <div>
                <FaRegBookmark className='me-3' ></FaRegBookmark>
                <FaShare></FaShare>
                <p><FaEye></FaEye> {total_view}</p>
                <FaStar className='text-warning'></FaStar>
                <span> {rating?.number}</span>
             </div>
            </div>
          
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
        </div>
    );
};

export default News;