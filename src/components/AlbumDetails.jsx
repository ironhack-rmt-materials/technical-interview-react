import { Link, useParams } from "react-router-dom";

function AlbumDetails(props) {

    const {albumId} = useParams();

    const album = props.albumsToDisplay.find( (albumObj) => {
        return albumObj.id === parseInt(albumId);
    });

    return (
        <div className='AlbumDetails'>
            <h1>{album.title}</h1>
            <h2>{album.artist} ({album.year})</h2>
            <p>Rating: {album.rating}</p>

            <p>
                <Link to="/albums" className="btn btn-primary">Back</Link>
            </p>
        </div>
    )
}

export default AlbumDetails;