import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    
    <div className=" sm:fixed top-0 left-0 right-0 flex place-content-between lg:px-16 sm:px-10 px-4 sm:py-5 py-4 sm:dark:bg-zinc-800 sm:shadow-sm sm:bg-zinc-100">
      <Link className="dark:text-white font-bold" to="/">
        <h1>React MySQL</h1>
      </Link>
      <ul className="flex gap-x-1 place-content-end">
        {[
          ["Home", "/"],
          ["Create new", "/new"],
        ].map(([title, url]) => (
          <Link
            key={title}
            to={url}
            className="sm:block hidden rounded-full px-3 py-1 dark:hover:bg-zinc-600  hover:bg-zinc-300 active:text-blue-500 hover:text-teal-500"
          >
            {title}
          </Link>
        ))}
      </ul>
      <img
        onClick={props.toggleDarkMode}
        className="self-left justify-self-end"
        src={props.darkMode ? "./assets/sun.svg" : "./assets/moon.svg"} 
      />
    </div>
  );
};

export default Navbar;
