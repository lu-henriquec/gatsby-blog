import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <Link to="/about">Sobre</Link>
    <Link to="/" activeStyle={{color: 'red'}}>Home</Link>
  </Layout>
)

export default IndexPage
