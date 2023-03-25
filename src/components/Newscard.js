import React from 'react'
import { Link } from 'react-router-dom'

function Newscard(props) {
    return (
        <div className=" row my-3">
            <div className="col  position-relative container">
                <div style={{ position: "absolute", right: "10%"}}>
                <span style={{zIndex:"1"}}className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {props.source}
                </span>
                </div>
                <div className="card">
                    <img src={props.Imgurl ? props.Imgurl : "https://cdn.mos.cms.futurecdn.net/VWyyNXvU8gZKPjNh66K3Ng-1200-80.jpg"} className="card-img-top" alt="newsImage" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <p className="card-text"><small className="text-muted">By {props.author ? props.author : "unknown"} on {new Date(props.publishedAt).toGMTString()}
                        </small></p>
                        <Link to={props.url} className="btn btn-dark ">More Info</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newscard
