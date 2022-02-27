import * as React from "react";
import "./InfoCard.sass";

export default function InfoCard(props) {
    const { icon, title, detail } = props;

  return (
    <div className="wrapper-card">
        <div className="card">
        <img id="icon" alt={'icon'} src={icon} />
        <h5 id="title">{title}</h5>
        <div id="details">{detail}</div>
        </div>
    </div>
  );
}