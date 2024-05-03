import {useState} from 'react';

function SearchBar({onSearch}) {
    const [query, setQuery] = useState('');
    
    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search song, artist, or album"
                value={query}
                onChange={handleChange}
            />
        </form>
    );


}

export default SearchBar;