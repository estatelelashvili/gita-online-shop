import { Outlet, Link } from 'react-router-dom';

export default function Navigator() {
  return (
    <main>
      <nav>
        <ul>
          <li>Online Shop Admin | </li>
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              Products
            </Link>
          </li>
          <li>
            <Link to='/customers' style={{ textDecoration: 'none' }}>
              Customers
            </Link>
          </li>
          <li>
            <Link to='/orders' style={{ textDecoration: 'none' }}>
              Orders
            </Link>
          </li>
          <li>
            <Link to='/reports' style={{ textDecoration: 'none' }}>
              Reports
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}
