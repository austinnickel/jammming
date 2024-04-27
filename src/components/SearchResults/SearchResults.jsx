
function SearchResults({initialResults, onAddTrack}) {

   return (
    <div>
        <h2>Search Results</h2>
        <ul>
        { initialResults.map((result) => (
            <li key={result.id}>
                {result.name} {result.artist} {result.album}
                <button onClick={() => onAddTrack(result)}>+</button>
                </li>
            ))};
        </ul>
    </div>
   )
};

export default SearchResults;