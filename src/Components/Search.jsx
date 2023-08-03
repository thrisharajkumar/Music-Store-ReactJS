import { useRef } from "react";

export const Search = ({ fn }) => {
    const artist = useRef();

    return (
        <>
            <label>Artist Name</label>
            <input ref={artist} type="text" className="form-control" placeholder="Search Artist Wise Song" />
            <button className="btn btn-success" onClick={() => {
                fn(artist.current.value); // Fix the property name here from artist.currrent.value to artist.current.value
            }}>
                Search It
            </button>
        </>
    );
}
