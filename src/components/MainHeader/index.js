import { NavLink as Link } from "react-router-dom";
import Logo from "../Logo";
import './index.scss';

export default function MainHeader() {
  return <header className="main-header">
    <div>
      <Link exact to="/">
        <Logo size="small" />
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link exact to="/">Home</Link>
        </li>
        <li>
          <Link to="/404">404</Link>
        </li>
      </ul>
    </nav>
  </header>
}