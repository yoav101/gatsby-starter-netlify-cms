import * as React from "react";
import "./BlogTag.sass";
import PersonIcon from "@mui/icons-material/Person";
import defualtImg from '../img/defaultBlogImg.jpg';

const BlogTag = ({ data }) => {
  const url = data?.featuredimage?.publicURL
  const img = url && !url.includes("webp") ? data.featuredimage.publicURL : defualtImg;
  // debugger
  return (
    <div
      className="container_BlogTag"
      style={{ background: `url(${img})`}}
    >
      <div className="author">
        <div>
          <PersonIcon />
          {data.author}
        </div>
      </div>
      <div className="titleDate_Container">
        <div className="date">{data.date.substring(0, 16)}</div>
        <div className="title">{data.title}</div>
      </div>
    </div>
  );
};
export default BlogTag;
