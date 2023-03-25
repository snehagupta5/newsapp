import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Newscard from './Newscard';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
    const [articles, setArticles] = useState([]);
    const [totalresult, setTotalresult] = useState("");
    const [page, setPage] = useState(1);
  const[loading,setloading]=useState(true);

    const updateNews = async () => {
        props.setProgress(0);
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}&apiKey=1f1fb097cd1041caac8cd9ffb0c4f762`
        const url=(props.keys==="All"?`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page + 1}&apiKey=1f1fb097cd1041caac8cd9ffb0c4f762`:
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}&q=${props.keys}&apiKey=1f1fb097cd1041caac8cd9ffb0c4f762`);
        props.setProgress(10);
        let data = await fetch(url);
        let parseData = await data.json();
        props.setProgress(30);
        setArticles(parseData.articles);
        setTotalresult(parseData.totalResults);
        props.setProgress(70);
        console.log(totalresult);
        props.setProgress(100);
        setloading(false);
    }


    const fetchMoreData = async () => {
        props.setProgress(10);
        setloading(true)
        const url=(props.keys==="All"?`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page + 1}&apiKey=1f1fb097cd1041caac8cd9ffb0c4f762`:
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}&q=${props.keys}&apiKey=1f1fb097cd1041caac8cd9ffb0c4f762`);
        // if(props.keys==="All"){
        //  url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page + 1}&apiKey=1f1fb097cd1041caac8cd9ffb0c4f762`
        // }else{
        // url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}&q=${props.keys}&apiKey=1f1fb097cd1041caac8cd9ffb0c4f762`
        // }
        let data = await fetch(url);
        setPage(page+1);
        let parseData = await data.json();
        props.setProgress(30);
        setloading(false);
        setArticles(articles.concat(parseData.articles));
        setTotalresult(parseData.totalResults);
        console.log(totalresult);
        props.setProgress(100);
    };

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="d-flex justify-content-center m-3"> <h2>NewsApp-Top Headlines</h2></div>
            < InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={!page===totalresult?false:true}
                loader={ loading &&<Loader/>}
            >
                <div className=' container my-3 '>
                    <div className="row">
                        {articles.map((element) => {
                            return <div className='col-md-4'>
                                <Newscard Imgurl={element.urlToImage} title={element.title}
                                    desc={element.description} author={element.author} publishedAt={element.publishedAt}
                                    url={element.url} source={element.source.name} /></div>
                        })
                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
News.defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general"
    
}
News.propTypes = {
    name: PropTypes.string,
    page: PropTypes.array,
    category: PropTypes.string,
}



export default News
