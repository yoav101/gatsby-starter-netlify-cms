import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import "./Clients.sass";

const ClientsGrid = ({ gridItems, space }) => (
  <div className="clients-container columns is-multiline" style={{gap: space, width: "90%"}}>
    {gridItems.map((item) => (
      <div key={item.text} style={{alignSelf: "center", padding: "5px"}} className="client">
        <div className="has-text-centered">
        <a href={item.text} target="_blank" rel="noreferrer">
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
