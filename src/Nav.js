import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Abigail Personius</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;