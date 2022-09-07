import React, { Component } from "react";


export default class Newsitemcomponent extends Component {
  render() {
    let {title,description,imageUrl,newsurl,author,publishedAt}=this.props;
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://static9.depositphotos.com/1011646/1236/i/950/depositphotos_12369509-stock-photo-breaking-news-screen.jpg":imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toUTCString()} </small></p>
          <a href={newsurl} className="btn btn-sm btn-dark">
          Read more 
          </a>
        </div>
      </div>
    );
  }
}
