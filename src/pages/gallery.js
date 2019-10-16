import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteImages from "../components/InfiniteImages"

const Gallery = () => {
    return (
      <Layout>
        <SEO title="Gallery" />
        <h1 className="is-size-3">Images from Unsplash...</h1>
        <p style={{ marginBottom: "5%" }}>
          Keep scrolling for more dog images 🐶 🐕:-
        </p>
        <InfiniteImages />
      </Layout>
    )
  }
  
  export default Gallery