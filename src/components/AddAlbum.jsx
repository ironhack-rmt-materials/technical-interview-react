import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddAlbum(props) {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [year, setYear] = useState("");

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const albumDetails = {
            title: title,
            artist: artist,
            year: parseInt(year)
        }

        // invoke a function in the parent component to create the new album
        props.callbackToCreate(albumDetails);

        // redirect to albums page
        navigate("/albums");

        // clear form
        setTitle("");
        setArtist("");
        setYear("");

    }


    return (
        <section className="AddAlbum box">
            <h2>Create your own album:</h2>

            <form onSubmit={handleSubmit}>
            <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="Abbey Road"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>
                    Artist:
                    <input
                        type="text"
                        name="artist"
                        required
                        placeholder="The Beatles"
                        value={artist}
                        onChange={(e) => { setArtist(e.target.value) }}
                    />
                </label>

                <label>
                    Year:
                    <input
                        type="number"
                        name="year"
                        required
                        placeholder="1999"
                        min={1900}
                        max={2100}
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </label>

                <p>
                    <button className="btn btn-primary">Create</button>
                </p>
            </form>
        </section>
    );
}

export default AddAlbum;