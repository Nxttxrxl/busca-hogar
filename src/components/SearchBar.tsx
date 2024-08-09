import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };
    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
<form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Buscar..."
                style={{
                    
                }}/>
            <button
                type="submit"
                style={{

                }}>Buscar</button>
        </form>
    );
};

export default SearchBar;
    
