import { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../components/Logo';
import MainHeader from '../../components/MainHeader';

import './index.scss';

function SearchPage(props) {
  const onNavigate = (term) => {
    return props.history.push('/search?q=' + encodeURIComponent(term));
  }
  return <div className="search-page">
    <MainHeader onNavigate={onNavigate} />
    <main className="main">
      dada
    </main>
  </div>
}

export default withRouter(SearchPage)