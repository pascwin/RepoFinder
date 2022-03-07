import * as React from 'react';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <div>
      <input
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;