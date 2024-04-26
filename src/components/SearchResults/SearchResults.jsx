
function SearchResults({initialResults, onAddTrack}) {

   return (
    <div>
        { results.map(track => (
            <div key={track.id}>
                <p>Name: {track.name}</p>
                <p>Artist: {track.artist}</p>
                <p>Album: {track.album}</p>
                <button onClick={() => onAddTrack(track)}>+</button>
            </div>
            ))};
    </div>
   )
};

export default SearchResults;