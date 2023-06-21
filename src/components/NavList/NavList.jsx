import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
const NavList = () => {
  const categories = ["Bartender", "Bebidas"];

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/" className="flex items-center text-white">
          Inicio
        </NavLink>
      </Typography>
      {categories.map((item) => {
        return (
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
            key={`${item}-category`}
          >
            <NavLink
              to={`/category/${item.toLowerCase()}`}
              className="flex items-center  text-white"
            >
              {item}
            </NavLink>
          </Typography>
        );
      })}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/contacto" className="flex items-center text-white">
          Contacto
        </NavLink>
      </Typography>
    </ul>
  );
};

export default NavList;
