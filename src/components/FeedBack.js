import * as React from "react";
import "./FeedBack.sass";
import Carousel from "react-material-ui-carousel";
import Avatar from "@mui/material/Avatar";

const FeedBack = ({ items }) => (
  <div style={{ position: "relative" }}>
    <Carousel autoPlay={false} duration={1000} animation="fade" swipe>
      {items.map((item, i) => (
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
        sx={{ width: 150, height: 150, border: "5px solid #D1DE35" }}
      />
      <h2
        style={{
          fontWeight: 700,
          color: "#3F3C55",
          padding: "10px",
          fontSize: "22px",
        }}
      >
        {props.item.name}
      </h2>
      <h3 style={{ padding: "10px", fontSize: "20px" }}>
        <a href={props.item.companyLink} target="_blank" rel="noreferrer">
          {props.item.company}
        </a>
      </h3>
      <p
        style={{
          color: "#3F3C55",
          paddingTop: "65px",
          fontWeight: 600,
          fontsize: "18px",
          lineHeight: "1.875rem",
        }}
      >
        {props.item.description}
      </p>
    </div>
  );
};

// FeedBack.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//       text: PropTypes.string,
//     })
//   ),
// };

export default FeedBack;
