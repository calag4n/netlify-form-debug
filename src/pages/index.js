import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      <input name="01" type="checkbox" value="01-01-2001" />{" "}
      <label htmlFor="01">01-01-2001</label>
    </div>

    <div>
      <input name="02" type="checkbox" value="02-02-2002" />{" "}
      <label htmlFor="01">01-01-2001</label>
    </div>

    <div>
      <input name="03" type="checkbox" value="03-03-2003" />{" "}
      <label htmlFor="01">01-01-2001</label>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
