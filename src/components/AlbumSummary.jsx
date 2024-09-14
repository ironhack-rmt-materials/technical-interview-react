import { Link } from "react-router-dom";

function AlbumSummary(props) {
    return (
        <div className="card">
            <h3>{props.albumDetails.title}</h3>
            <p>Year: {props.albumDetails.year}</p>
            
            <p>
                <button className="btn btn-secondary" onClick={() => { props.callbackToDelete(props.albumDetails.id) }}>Delete</button>
                <Link className="btn btn-primary" to={`/albums/${props.albumDetails.id}`}>More Details</Link>
            </p>
        </div>
    );
}

export default AlbumSummary;