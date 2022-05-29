import * as React from "react";
import "./FeedBack.sass";
import Carousel from "react-material-ui-carousel";
import Avatar from "@mui/material/Avatar";
import { isMobile } from "react-device-detect";

const FeedBack = ({ items }) => (
  <div style={{ position: "relative", paddingBottom: "50px" }}>
    <Carousel autoPlay={false} duration={1000} swipe height={"730px"}>
      {items?.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  </div>
);


const Item = (props) => {
  return (
    <div className="carouselContent">
      <Avatar
        alt={props.item.name}
        src={`../img/feedback/${props.item.picturePath}`}
        className="avatar"
        sx={{ width: isMobile ? 81 : 157, height: isMobile ? 81 : 157 }}
      />
      <h2 className="clientName">{props.item.name}</h2>
      <h3 className="clientCompany">
        <a href={props.item.companyLink} target="_blank" rel="noreferrer">
          {props.item.company}
        </a>
      </h3>
      <p className="description">{props.item.description}</p>
    </div>
  );
};
export default FeedBack;
