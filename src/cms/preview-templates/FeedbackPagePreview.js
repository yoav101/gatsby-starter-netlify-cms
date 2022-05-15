import React from "react";
import PropTypes from "prop-types";
import { FeedbackPageTemplate } from "../../templates/feedback-page";

const FeedbackPagePreview = ({ entry, getAsset }) => {
  return (
    <FeedbackPageTemplate
      title={entry.getIn(["data", "title"])}
      image={getAsset(entry.getIn(["data", "image"]))}
      intro={entry.getIn(["data", "intro"])}
      // picturePath={getAsset(entry.getIn(["data", "image"]))}
      // name={entry.getIn(["data", "name"])}
      // company={entry.getIn(["data", "company"])}
      // companyLink={entry.getIn(["data", "companyLink"])}
    />
  );
};

FeedbackPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FeedbackPagePreview;
