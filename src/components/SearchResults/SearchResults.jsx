import Tracklist from '../Tracklist/Tracklist';

const SearchResults = (props) => {

   return (
    <div className="SearchResults">
        <h2>Search Results</h2>
      <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        
    </div>
   );
};

export default SearchResults;