import db from '../../utils/db';
import { withRouter } from 'react-router-dom';
import MainHeader from '../../components/MainHeader';
import getValueFromQuery from '../../utils/getValueFromQuery';
import './index.scss';

function SearchPage(props) {
  const q = getValueFromQuery('q', props.location.search);
  const searchResult = db.find(x => x.title === q);
  const onNavigate = (term) => {
    return props.history.push('/search?q=' + encodeURIComponent(term));
  }
  console.log(searchResult)
  return <div className="search-page">
    <MainHeader onNavigate={onNavigate} />
    <main className="main">
      {searchResult.path}
    </main>
  </div>
}

export default withRouter(SearchPage)