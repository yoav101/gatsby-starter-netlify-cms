import React from "react";
import "./Services.sass";
import whatWeDo from "../img/services-background.svg";

const Services = ({ data }) => {
  return (
    <>
      <div className="title_Services">{data.title}</div>
      <div
        className="container_Services"
        style={{
          background: `url(${whatWeDo})`,
          minHeight: "900px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
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
    <img src={service.icon.publicURL} alt="" />
    <div className="titleDesc_Container">
      <div className="title">{service.title}</div>
      <div className="desc">{service.desc}</div>
    </div>
  </div>
);

export default Services;
