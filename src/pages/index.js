import React from "react"

import Layout from "../components/layout"

import AppContext from "../context/AppContext"

const IndexPage = () => (
  <AppContext.Consumer>
    {context => {
      const datesList = context.dateToBook.map((date, index) => (
        <input
          type="text"
          name={`date-${index}-map`}
          key={`date-${index}-map`}
          value={date}
          readOnly={true}
        />
      ))
      return (
      <Layout>
        <h2>Select some dates :</h2>
        <div>
          <button
            name="01"
            onClick={() => context.handleDateSelected("01-01-2001")}
          >
            01-01-2001
          </button>
        </div>

        <div>
          <button
            name="02"
            onClick={() => context.handleDateSelected("02-02-2002")}
          >
            02-02-2002
          </button>
        </div>

        <div>
          <button
            name="03"
            onClick={() => context.handleDateSelected("03-03-2003")}
          >
            03-03-2003
          </button>
        </div>

        <br />

        <h2>Form :</h2>

        <form
          method="post"
          action="#"
          name="booking"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="booking" />

          <h3>Selected dates :</h3>
          <div>
            {datesList}
          </div>

          <div>
            <label htmlFor="name">name</label>
            <input type="text" name="name" />
          </div>

          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </Layout>
    )}}
  </AppContext.Consumer>
)

export default IndexPage
