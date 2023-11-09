import React from 'react';

export const SearchResults = ({ result }) => {
    return <div
        className="px-3 pb-3 py-3 hover:bg-amber-200 text-center">{result.title}</div>;
};
