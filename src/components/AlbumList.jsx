
import AlbumSummary from "./AlbumSummary";


function AlbumList (props) {

    return (
        <section className="AlbumList">
            
            <h1>List of Albums</h1>

            <div className="grid-list">

                {props.albumsToDisplay.map( (albumDetails) => {
                    return (
                        <div key={albumDetails.id} className="grid-item" >
                            <AlbumSummary 
                                albumDetails={albumDetails}
                                callbackToDelete={props.callbackToDelete}
                            />
                        </div>
                        
                    );
                })}
            </div>

        </section>
    );
}

export default AlbumList;
