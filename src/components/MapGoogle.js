import * as React from "react";
import "./MapGoogle.sass";

export default function MapGoogle(props) {
  const { width, height } = props;

  return (
    <div className="map">
        <iframe width={width} height={height} title="msapps_map" id="gmap_canvas" src="https://maps.google.com/maps?q=Galgalei%20haplada%206%20herzliya&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
    </div>
  );
}

