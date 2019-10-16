
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bulma/css/bulma.min.css"

const IndexPage1 = () => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">Welcome to Dog Gallery 😹</h1>
      <p className="is-size-5" style={{ marginTop: "2%" }}>
        Find within, a dog-focussed infinite image gallery built with Gatsby, and
        images served using Netlify functions from Unsplash. Perfecto!
      </p>
      <button className="button is-dark is-large" style={{ marginTop: "10%" }}>
        <Link to="/gallery/" className="has-text-white">
          Click to see gallery! 🔥
        </Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage1
