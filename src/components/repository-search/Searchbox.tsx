import * as React from 'react';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <div>
        <div className="input-group container">
                <div className="form-outline">
                    <input onChange={searchChange} type="search" id="userSearch" className="form-control" placeholder="search in Repos" />
                </div>
            </div>
    </div>
  );
};

export default SearchBox;