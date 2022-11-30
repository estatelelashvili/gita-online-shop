import { Outlet, Link } from 'react-router-dom';

export default function Navigator() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Products</Link>
          </li>
          <li>
            <Link to='/customers'>Customers</Link>
          </li>
          <li>
            <Link to='/orders'>Orders</Link>
          </li>
          <li>
            <Link to='/reports'>Reports</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}
