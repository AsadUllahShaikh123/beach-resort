import React from "react";
import { Typography } from "@mui/material";
import client1 from "../../images/about/client1.png";
import client2 from "../../images/about/client2.png";
import client3 from "../../images/about/client3.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const data = [
    {
      image: client1,
      heading: "Customer ABC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum quibusdam commodi quae voluptatum esse!",
    },
    {
      image: client2,
      heading: "Customer XYZ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum quibusdam commodi quae voluptatum esse!",
    },
    {
      image: client3,
      heading: "Customer 123",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum quibusdam commodi quae voluptatum esse!",
    },
  ];
  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 1,
    },
  };

  const items = data.map((values) => (
    <div className="w-full grid grid-cols-12 p-4 h-full">
      <div className="col-span-7 ">
        <img
          src={values.image}
          alt=""
          srcset=""
          style={{ width: "100%", height: "500px" }}
        />
      </div>
      <div className="col-span-5 ">
        <div className="h-full flex flex-col justify-center">
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            {values.heading}
          </Typography>
          <Typography
            variant="h6"
            className="text-gray-500"
            style={{ textAlign: "center", width: "100%" }}
          >
            {values.description}
          </Typography>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="w-full  flex justify-center">
        <div
          className="w-5/6 "
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <div className='h-full w-full'>
            <AliceCarousel
              mouseTracking
              infinite
              autoPlayInterval={1000}
              animationDuration={2000}
              disableDotsControls
              disableButtonsControls
              responsive={responsive}
              autoPlay
              items={items}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
