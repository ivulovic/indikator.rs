import { NavLink as Link } from "react-router-dom";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import './index.scss';

export default function MainHeader({ onNavigate }) {
  return <div className="main-header-wrapper">
    <header className="main-header">
      <div>
        <Link exact to="/">
          <Logo size="small" />
        </Link>
      </div>
      <SearchInput onSelect={onNavigate} />
      {/* <nav>
        <ul>
          <li>
            <Link to="/covid">КОВИД 19</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  </div>
}