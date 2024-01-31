import { Link, Outlet } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Go to the Homepage</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
