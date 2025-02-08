import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-red-500' : '')}>Home</NavLink>
      <NavLink to="/catalog" className={({ isActive }) => (isActive ? 'bg-red-500' : '')}>Catalog</NavLink>
    </div>
  )
}