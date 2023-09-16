import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to={'/'}>
          <h1>Home</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;