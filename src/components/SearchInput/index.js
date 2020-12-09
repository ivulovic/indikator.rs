import { useEffect, useRef, useState } from 'react';
import { searchByTitle } from './utils';
import getValueFromQuery from '../../utils/getValueFromQuery';
import './index.scss';
import { withRouter } from 'react-router-dom';

function SearchInput({ focusOnInit, onSelect, location: { search } }) {
  const searchRef = useRef();
  const value = getValueFromQuery('q', search);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (focusOnInit) {
      searchRef.current.focus();
    }
  }, [])

  const SearchResultRow = ({ className, to, children }) => <button className={className} onClick={() => onSelect(to)}>{children}</button>


  const handleSearch = (value) => {
    setSearchTerm(value);
    console.log(searchByTitle(value))
  }

  const searchResults = searchByTitle(searchTerm);
  const hasResults = searchTerm.length > 0 && searchResults.length; // searchTerm && searchTerm.length > 2;
  return <div className="main-search">
    <div className="content-search">
      <div className={`search-input ${hasResults ? 'has-results' : ''}`}>
        <input onKeyUp={(e) => {
          console.log(e.which)
          if (e.which === 13 && searchResults.length) {
            onSelect(searchResults[0].title)
          }
        }} defaultValue={value} ref={searchRef} onInput={({ target: { value } }) => handleSearch(value)} placeholder="Информације у секунди" />
        {/* <button>ИСТРАЖИ</button> */}
      </div>
    </div>
    <div className="search-results-wrapper">
      {hasResults ? <div className="search-results">
        {searchResults.map(x => <SearchResultRow className="search-result" to={x.title}>{x.title}</SearchResultRow>)}
      </div> : null}
    </div>
  </div>
}

export default withRouter(SearchInput)