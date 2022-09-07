import React, { Component } from "react";
import Newsitemcomponent from "./Newsitemcomponent";
//import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newscomponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async updatecard() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=27aa2badf0cb4f7e86f5068ab47b08c5&page=${this.state.page}&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=27aa2badf0cb4f7e86f5068ab47b08c5&page=${this.state.page}&pageSize=20`;
    // this.setState({loading:true})
    // let data=await fetch(url);
    // let parseddata=await data.json();
    // this.setState({articles:parseddata.articles,
    //   totalResults:parseddata.totalResults,
    //   loading:false
    // })
    this.updatecard();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=27aa2badf0cb4f7e86f5068ab47b08c5&page=${this.state.page}&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
      loading: false,
    });
  };
  // handleprevious=async ()=>{
  //   // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=27aa2badf0cb4f7e86f5068ab47b08c5&page=${this.state.page-1}&pageSize=20`;
  //   // this.setState({loading:true})
  //   // let data=await fetch(url);
  //   // let parseddata=await data.json();
  //   this.updatecard();

  //  this.setState({
  //   page:this.state.page-1
  //   // articles:parseddata.articles,
  //   // loading:false
  //  })
  // }

  // handlenext=async()=>{
  // //    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){}
  // //    else{
  // //   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=27aa2badf0cb4f7e86f5068ab47b08c5&page=${this.state.page+1}&pageSize=20`;
  // //   this.setState({loading:true})
  // //   let data=await fetch(url);
  // //   let parseddata=await data.json();

  // //  this.setState({
  // //   page:this.state.page+1,
  // //   articles:parseddata.articles,
  // //   loading:false
  // //  })
  // // }
  // this.updatecard();
  // this.setState({
  //   page:this.state.page+1
  // })
  // }

  render() {
    return (
      <>
      
        <h3 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>Daily News: Top Headlines in {this.props.category} category</h3>
        
        {/* {this.state.loading&&<Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          //loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitemcomponent
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark btn-active" onClick={this.handleprevious}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} className={`btn ${this.state.page+1>Math.ceil(this.state.totalResults/20)?"":"btn-dark"} btn-active`} onClick={this.handlenext} >Next &rarr;</button>
        </div> */}
      </>
    );
  }
}
