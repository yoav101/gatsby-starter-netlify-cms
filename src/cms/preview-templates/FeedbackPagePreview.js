import React from "react";
import PropTypes from "prop-types";
import { FeedbackPageTemplate } from "../../templates/feedback-page";

const FeedbackPagePreview = ({ entry, getAsset }) => {
  return (
    <FeedbackPageTemplate
      title={entry.getIn(["data", "title"])}
      intro={entry.getIn(["data", "intro"])}
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
