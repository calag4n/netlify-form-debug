import React from "react"
import Layout from "../components/layout"
import AppContext from "../context/AppContext"

const IndexPage = () => (
  <AppContext.Consumer>
    {context => (
      <Layout>
        <h2>Select some dates :</h2>
        <div>
          <button
            name="01"
            value="01-01-2001"
            onClick={e => context.handleDateSelected(e)}
          >
            01-01-2001
          </button>
        </div>

        <div>
          <button
            name="02"
            value="02-02-2002"
            onClick={e => context.handleDateSelected(e)}
          >
            02-02-2002
          </button>
        </div>

        <div>
          <button
            name="03"
            value="03-03-2003"
            onClick={e => context.handleDateSelected(e)}
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
            {context.dateToBook.map((date, index) => (
              <input
                type="text"
                name={`date-${index}-map`}
                key={`date-${index}-map`}
                value={date}
                readOnly={true}
              />
            ))}
          </div>

          <div>
            {context.dateToBook.forEach((date, index) => (
              <input
                type="text"
                name={`date-${index}-forEach`}
                key={`date-${index}-forEach`}
                value={date}
                readOnly={true}
              />
            ))}
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
    )}
  </AppContext.Consumer>
)

export default IndexPage
