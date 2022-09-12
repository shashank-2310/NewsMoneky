import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div className="d-flex justify-content-end position-absolute end-0" >
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={!imgUrl ? "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/631ee27ab72644c222d1aba9ca63eeb1.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-danger">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem