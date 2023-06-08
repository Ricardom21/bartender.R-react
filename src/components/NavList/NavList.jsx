import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const NavList = () => {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center text-white">
          Inicio
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/category/bartender" className="flex items-center">
          Bartender
        </Link>
      </Typography>

      {/* Agrega más categorías aquí si es necesario */}

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/contacto" className="flex items-center">
          Contacto
        </Link>
      </Typography>
    </ul>
  );
};

export default NavList;