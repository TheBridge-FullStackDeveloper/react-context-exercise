import { NavLink, Outlet } from 'react-router'

export const Navbar = () => {
  return (
    <>
    <nav style={{display: 'flex', justifyContent: 'center', gap: 10}}>
      <NavLink style={{textDecoration:'none', color:'white'}} to="/">
        Home
      </NavLink>
      <NavLink style={{textDecoration:'none', color:'white'}} to="/characters" end>
        Characters
      </NavLink>
    </nav>
    <Outlet />
    </>
  )
}
