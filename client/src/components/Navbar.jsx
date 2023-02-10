import { Link, NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = (props) => {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: true },
    { name: "Create new", href: "/new", current: false },
  ]);

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 dark:bg-gray-800 dark:shadow-lg dark:shadow-slate-500/50 shadow-lg shadow-zinc-500/50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Desktop menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2  text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        //onClick={() => setCurrent(item.name)}
                        className={({ isActive }) =>
                          isActive
                            ? "dark:bg-gray-900 dark:text-white bg-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            : "dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white hover:bg-slate-50 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <img
                  onClick={props.toggleDarkMode}
                  className="self-left justify-self-end"
                  src={
                    props.darkMode ? "./assets/sun.svg" : "./assets/moon.svg"
                  }
                />
              </div>
            </div>
          </div>
          {/* Mobile menu button*/}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  as="a"
                  to={item.href}
                  //onClick={() => setCurrent(item.name)}
                  className={({ isActive }) =>
                    isActive
                      ? "dark:bg-gray-900 dark:text-white bg-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      : "dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white hover:bg-slate-50 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
