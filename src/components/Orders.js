import commingSoon from '../assets/coming-soon.png';
import { Outlet, Link } from 'react-router-dom';
export default function Orders() {
  return (
    <div className='shared'>
      <h1>Orders Page</h1>
      <div className='main-container'>
        <img className='coming-soon' src={commingSoon} alt='coming-soon' />
        <Link to='/' style={{ textDecoration: 'none', color: 'blue' }}>
          Back to Products
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
