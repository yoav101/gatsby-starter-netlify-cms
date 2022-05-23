import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    imageLogo,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "start",
        }}
      >
        {img?.url ? (
          <img
            src={img}
            // objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              minHeight: "750px",
              height: height,
              width: "100%",
            }}
            // aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif", "png"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            // objectFit={"cover"}
            // objectPosition={imgPosition}
            objectPosition={"center"}
            style={{
              gridArea: "1/1",
              minHeight: "750px",
              // position: "unset",
            }}
            layout="fullWidth"
            // aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif", "png"]}
          />
        )}
        {(imageLogo || subheading) && (
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              display: "grid",
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))",
              backdropFilter: "blur(7px)",
              justifyContent: "center",
              paddingTop: "75px",
              marginTop: "260px",
              // By using the same grid area for both, they are stacked on top of each other
            }}
          >
            {imageLogo && (
              <img
                src={imageLogo}
                style={{
                  gridArea: "1/1",
                  width: "100vw",
                  maxWidth: "32rem",
                  padding: "16px",
                }}
                alt=""
              />
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  lineHeight: "1",
                  marginBottom: "2.875rem",
                  marginTop: "1.875rem",
                  fontWeight: "600",
                  fontSize: "32px",
                  color: "#5F605D",
                  textAlign: "center",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageLogo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  height: PropTypes.number,
  subheading: PropTypes.string,
};
