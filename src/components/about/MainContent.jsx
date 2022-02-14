import React from "react";
import about from "../../images/about/about.png";

import { Typography, Button } from "@mui/material";
const MainContent = () => {
  return (
    <>
      <div className="grid grid-cols-12  m-0 h-full">
        <div className="col-span-6">
          <img src={about} alt="" style={{ width: "100%", height: "80%" }} />
        </div>
        <div className="col-span-6  ">
          <div className="text-center mt-20">
            <Typography variant="h2" style={{ marginBottom: "2rem" }}>
              About Us
            </Typography>
            <Typography
              variant="h6"
              className="text-gray-500"
              style={{ marginBottom: "2rem" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              itaque ducimus error et ratione ut aut omnis ea id libero minus
              eligendi deleniti nam amet possimus quibusdam architecto
              asperiores debitis!
            </Typography>
            <div className="flex justify-center">
              <Button
                variant="outlined"
                style={{
                  width: "50%",
                  border: "2px solid gray",
                  color: "gray",
                  fontSize: "1rem",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
