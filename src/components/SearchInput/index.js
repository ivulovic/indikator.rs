import { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../components/Logo';

import './index.scss';

function SearchInput({ focusOnInit, onSelect }) {
  const [searchTerm, setSearchTerm] = useState();

  const searchRef = useRef();

  useEffect(() => {
    if (focusOnInit) {
      searchRef.current.focus();
    }
  }, [])

  const SearchResultRow = ({ className, to, children }) => <button className={className} onClick={() => onSelect(to + searchTerm)}>{children}</button>
  const hasResults = searchTerm && searchTerm.length > 2;
  return <div className="main-search">
    <div className="content-search">
      <div className={`search-input ${hasResults ? 'has-results' : ''}`}>
        <input ref={searchRef} onInput={({ target: { value } }) => setSearchTerm(value)} placeholder="Информације у секунди" />
        {/* <button>ИСТРАЖИ</button> */}
      </div>
    </div>
    <div className="search-results-wrapper">
      {hasResults && <div className="search-results">
        <SearchResultRow className="search-result" to="/covid">Korona virus</SearchResultRow>
        <SearchResultRow className="search-result" to="/covid">Korona virus</SearchResultRow>
        <SearchResultRow className="search-result" to="/covid">Korona virus</SearchResultRow>
        <SearchResultRow className="search-result" to="/covid">Korona virus</SearchResultRow>
        <SearchResultRow className="search-result" to="/covid">Korona virus</SearchResultRow>
        <SearchResultRow className="search-result" to="/covid">Korona virus</SearchResultRow>
        <SearchResultRow className="search-result" to="/covid">Korona virus</SearchResultRow>
      </div>}
    </div>
  </div>
}

export default SearchInput