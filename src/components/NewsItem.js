import React from 'react';

const NewsItem =(props) => {
    
   let {title,description , imageUrl, newsUrl,author,date,source} = props;
    return (
      <div className  ="my-3">
         <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'88%' , zIndex:'1'}}>{source}</span>
      
       <img src={!imageUrl?"https://assets.sentinelassam.com/h-upload/2023/07/04/466554-nasas-parker-solar-probe-makes-16th-close-flyby-of-sun.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown Author":author} on {new Date(date).toGMTString()} </small></p>
    <a href= {newsUrl}  rel="noreferrer" target = "_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }

export default NewsItem