import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  let [color, setColor] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setColor("black");
        console.log(window.scrollY);
      } else setColor("transparent");
    });
  }, []);
  let mainContainer =
    "flex flex-col w-screen p-4 items-center  md:flex-row overflow-hidden  fixed top-0 z-50";
  return (
    <>
      <div
        className={mainContainer}
        style={{ backgroundColor: `${color}`, transition: "0.5s" }}
      >
        <div className="flex-1">
          <h1 className="text-4xl inline-flex text-blue-400 hover:cursor-pointer hover:text-orange-300 font-bold">
            Luxury Rooms
          </h1>
        </div>
        <div className="navlinks flex flex-col md:flex-row md:justify-around w-full mt-4 md:mt-0 text-blue-400 md:w-5/12 items-center">
          <Typography
            className="hover:cursor-pointer hover:text-orange-300 "
            style={{ fontWeight: "bold", padding: ".3rem", fontSize: "1.5rem" }}
            onClick={() => navigate("/")}
          >
            Home
          </Typography>
          <Typography
            className="hover:cursor-pointer hover:text-orange-300 "
            style={{ fontWeight: "bold", padding: ".3rem", fontSize: "1.5rem" }}
            onClick={() => navigate("/rooms")}
          >
            Rooms
          </Typography>
          <Typography
            className="hover:cursor-pointer hover:text-orange-300 "
            style={{ fontWeight: "bold", padding: ".3rem", fontSize: "1.5rem" }}
            onClick={() => navigate("/about")}
          >
            About
          </Typography>
          <Typography
            className="hover:cursor-pointer hover:text-orange-300 "
            style={{ fontWeight: "bold", padding: ".3rem", fontSize: "1.5rem" }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Header;
