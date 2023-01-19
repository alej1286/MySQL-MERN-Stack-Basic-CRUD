import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <h1>React MySQL</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create Task</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
