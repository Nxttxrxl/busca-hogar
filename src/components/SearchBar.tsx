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
<form onSubmit={handleSearch} className="flex items-center space-x-1">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Buscar..."
                className="p-1 text-sm border border-gray-300 rounded-lg"
                />
            <button
                className="p-1 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-800"
                type="submit"
                style={{

                }}>Buscar</button>
        </form>
    );
};

export default SearchBar;
    
