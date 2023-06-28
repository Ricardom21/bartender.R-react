import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import CartWidget from "../CartWidget/CartWidget";

import NavList from "../NavList/NavList";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    return () => {
      window.removeEventListener("resize", () =>
        window.innerWidth >= 960 && setOpenNav(false)
      );
    };
  }, []);

  return (
    <div className="w-full bg-slate-700">
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 border-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as={NavLink}
            to="/"
            className="mr-4 cursor-pointer py-1.5 font-medium text-white"
          >
            Bartender.R
          </Typography>

          <div className="hidden lg:block">
            <NavList />
          </div>

          <Link to="/cart">
            <CartWidget />
          </Link>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </Navbar>

      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <NavList />
        </div>
      </MobileNav>
    </div>
  );
};

export default NavBar;
