import React from "react"
import ContentLoader from "react-content-loader"

const Loading = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={70}
    viewBox="0 0 320 70"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="91" y="71" rx="3" ry="3" width="320" height="6" /> 
    <rect x="58" y="99" rx="3" ry="3" width="380" height="6" /> 
    <rect x="58" y="115" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="46" cy="30" r="30" /> 
    <rect x="89" y="39" rx="0" ry="0" width="182" height="15" /> 
    <rect x="279" y="2" rx="2" ry="2" width="30" height="60" /> 
    <rect x="91" y="6" rx="0" ry="0" width="182" height="23" />
  </ContentLoader>
)

export default Loading

