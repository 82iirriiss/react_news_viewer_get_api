<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './Newsltem';
=======
import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
>>>>>>> 5d4b27817f9bf5ca40f4a725e3f1edf57dea5ed4
import axios from 'axios';

const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width:768px;
<<<<<<< HEAD
margin:0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}`;

// const sampleArticle = {
//     title:'제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = () => {

=======
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px){
    width: 100%;
    padding-left:1rem;
    padding-right: 1rem;
}`;


const NewsList = () => {
>>>>>>> 5d4b27817f9bf5ca40f4a725e3f1edf57dea5ed4
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
<<<<<<< HEAD
        //async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=4e6383d4fa3542f59e5d90a0a6abeafd',);
=======

        const fetchData = async() => {
            setLoading(true);
            try{
                const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=4e6383d4fa3542f59e5d90a0a6abeafd",);
>>>>>>> 5d4b27817f9bf5ca40f4a725e3f1edf57dea5ed4
                setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
<<<<<<< HEAD

        fetchData();
    },[]);

    //대기중일 때
    if (loading){
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    //아직 articles 값이 설정되지 않았을 때
    if(!articles){
        return null;
    }

    // articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map(article => {
                <NewsItem key={article.url} article={article}/>
            })}
        </NewsListBlock>
=======
        fetchData();
    },[]);

    if(loading){
        return <NewsListBlock>대기 중.....</NewsListBlock>;
    }
    if(!articles){
        return null;
    }
    return (
        <NewsListBlock>
            {articles.map(article=>(
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
        
>>>>>>> 5d4b27817f9bf5ca40f4a725e3f1edf57dea5ed4
    );
};

export default NewsList;