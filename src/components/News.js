import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country : 'in',
        pageSize : 6,
        category:'general',

    }
    static propTypes={
        country : PropTypes.string,
        pageSize : PropTypes.number, 
        category: PropTypes.string,
    }
    
    capitaliseFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase()+ string.slice(1);
    }

  constructor(props){
        super(props);
        // console.log("sanchit");
        this.state= 
            {
               articles: [],
               loading: false,
               page:1
            }
            document.title =`${this.capitaliseFirstLetter(this.props.category)} - NewsVerse`;
        }



//works after the render is done
    async componentDidMount(){
            
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json() 
            console.log(parsedData);
            this.setState({ articles: parsedData.articles ,
                totalResults: parsedData.totalResults})
        }
            
     
         handleNextClick = async () => {
            console.log("Next");
            if (this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)) {
            }
            else {
                let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
                let data = await fetch(url);
                let parsedData = await data.json()
                console.log(parsedData);
                this.setState({
                    page: this.state.page + 1,
                    articles: parsedData.articles
                })
            }
        }

        handlePrevClick = async () => {
            console.log("Previous");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles
            })
        }


    //     //works after the render is done
    // async componentDidMount(){
            
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json() 
    //     console.log(parsedData);
    //     this.setState({ articles: parsedData.articles ,
    //         totalResults: parsedData.totalResults})
    // }
        
 
    //  handleNextClick = async () => {
    //     console.log("Next");
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)) {
    //     }
    //     else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         let data = await fetch(url);
    //         let parsedData = await data.json()
    //         console.log(parsedData);
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles
    //         })
    //     }
    // }

    // handlePrevClick = async () => {
    //     console.log("Previous");
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData);
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles
    //     })
    // }




  render(){
    return (
        
      <div className="container my-3">
        {/* console.log("sanchit3"); */}
        <div className= "text-center">
        <h2> NewsVerse - Top {this.capitaliseFirstLetter(this.props.category)} Headlines</h2>
        </div>
        <div className="row">
            { this.state.articles.map((element)=>{
                return <div className= "col-md-4"  key= {element.url}>
        
                <NewsItem title = {element.title?element.title:".." } desription= {element.description?element.description:".."} imageUrl ={element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
            })}
         <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;
        Previous</button>
    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
</div>
      
        
      </div>
      </div>
    )
  }
}


export default News
// console.log("sdfdf");