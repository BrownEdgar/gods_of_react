import React from "react";
import ContentLoader from "react-content-loader";

const PostLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={660}
    viewBox="0 0 1200 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
   
    <rect x="82" y="40" rx="0" ry="0" width="561" height="58" />
  </ContentLoader>
);

export default PostLoader;
