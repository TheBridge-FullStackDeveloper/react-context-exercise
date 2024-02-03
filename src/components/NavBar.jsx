import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <ul  className='nav-bar'>
        <li>
          <Link to="/"> 🏡home page🏡 </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};