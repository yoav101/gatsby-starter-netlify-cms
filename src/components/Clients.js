import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ClientsGrid = ({ gridItems }) => (
  <div className="columns is-multiline" style={{gap: "0.5rem"}}>
    {gridItems.map((item) => (
      <div key={item.text}>
        <div className="has-text-centered">
        <a href={item.text} target="_blank">
        <PreviewCompatibleImage imageInfo={item} />
        </a>
        </div>
      </div>
    ))}
  </div>
);

ClientsGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default ClientsGrid;
