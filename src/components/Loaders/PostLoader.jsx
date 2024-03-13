import React from "react"
import ContentLoader from "react-content-loader"
import './PostLoader.scss'

const PostLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1280}
    height={230}
    viewBox="0 0 1280 230"
    backgroundColor="#c8c8da"
    foregroundColor="#9e8a8a"
    {...props}
  >
    <rect x="1" y="1" rx="29" ry="29" width="390" height="225" />
    <rect x="420" y="1" rx="29" ry="29" width="390" height="225" />
    <rect x="840" y="1" rx="29" ry="29" width="390" height="225" />

  </ContentLoader>
)

export default PostLoader

