import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-base-100 shadow-md">
        <div className="navbar container mx-auto">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/category1">Category 1</Link>
                  </li>
                  <li>
                    <Link href="/category2">Category 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        {/* Brand Logo */}
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          My Blog
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/about">Support</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/contact" className="btn">
          Next Blog
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
