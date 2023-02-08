import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={440}
    viewBox="0 0 280 440"
    backgroundColor="#dfddde"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="502" y="516" rx="3" ry="3" width="88" height="6" /> 
    <rect x="549" y="511" rx="3" ry="3" width="52" height="6" /> 
    <rect x="528" y="518" rx="3" ry="3" width="410" height="6" /> 
    <rect x="376" y="513" rx="3" ry="3" width="380" height="6" /> 
    <rect x="474" y="504" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="569" cy="501" r="20" /> 
    <rect x="-1" y="1" rx="0" ry="0" width="272" height="384" />
  </ContentLoader>
)

export default MyLoader
