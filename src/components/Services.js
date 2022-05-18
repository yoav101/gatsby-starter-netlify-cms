import React from "react";
import "./Services.sass";
import whatWeDo from "../img/whatWeDo.svg";

const Services = ({ data }) => {
  return (
    <>
      <div className="title_Services">{data.title}</div>
      <div
        className="container_Services"
        style={{
          background: `url(${whatWeDo})`,
          minHeight: "950px",
          backgroundRepeat: "no-repeat",
          position: "relative",
          backgroundSize: "cover",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="itemsWrapper">
          {data.cases.map((service, index) => (
            <Item key={index} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

const Item = ({ service }) => (
  <div className="container_Item">
    <img
      src={service.icon.publicURL}
      alt=""
      width={100}
      height={100}
    />
    <div className="titleDesc_Container">
      <div className="title">{service.title}</div>
      <div className="desc">{service.desc}</div>
    </div>
  </div>
);

export default Services;
