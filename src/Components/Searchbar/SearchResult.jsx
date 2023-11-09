import React from 'react';

export const SearchResult = ({ result }) => {
    return <div
        className="px-10 pb-20 bg-amber-200 hover:bg-slate-900">{result.title}</div>;
};
