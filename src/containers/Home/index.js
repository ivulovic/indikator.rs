import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../components/Logo';
import RecentSearches from '../../components/RecentSearches';
import SearchInput from '../../components/SearchInput';

import './index.scss';

function HomePage(props) {
  // https://dribbble.com/shots/4875755-TubeInsights-Landing/attachments/1094421?mode=media
  // https://dribbble.com/shots/14504769-Homepage-Iteration/attachments/6190319?mode=media
  // https://www.iconfinder.com/iconsets/coronavirus-15
  // coronatracker.com/country/serbia/
  const onNavigate = (term) => {
    console.log('goto ', term, '/search?q=' + encodeURIComponent(term))
    return props.history.push('/search?q=' + encodeURIComponent(term));
  }
  return <main className="main">
    <div className="home-page">
      <div className="main-logo">
        <Logo size="normal" />
        <h1>Индикатор</h1>
      </div>

      {/* <h1 className="page-title">Показатељ информација у реалном времену</h1>
    <h2 className="page-subtitle">
      подаци који се тичу грађана морају да буду што транспарентнији
    </h2> */}

      <SearchInput focusOnInit={true} onSelect={onNavigate} />

      <RecentSearches />

      {/* <div className="card"></div> */}
      {/* <div className="card"></div> */}
      {/*
    Јавност може да има увид у податке у реалном времену */}
    </div>
  </main>
}

export default withRouter(HomePage)