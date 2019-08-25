import React from "react"

import Layout from "../components/layout"

import AppContext from "../context/AppContext"

class IndexPage extends React.Component {
  state = {
    list: this.context.dateToBook,
    list2: ["a", "b", "c"],
  }

  handleSelection = event => {
    console.log(event.target.value)
    const list = [...this.state.list]

    list.push(event.target.value)

    this.setState({ list })

    this.context.handleDateSelected(event.target.value)
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => {
          return (
            <Layout>
              <h2>#9</h2>
              <h2>Select some dates :</h2>
              <div>
                <button
                  name="01"
                  value="01-01-2001"
                  onClick={e => this.handleSelection(e)}
                >
                  01-01-2001
                </button>
              </div>

              <div>
                <button
                  name="02"
                  value="02-02-2002"
                  onClick={e => this.handleSelection(e)}
                >
                  02-02-2002
                </button>
              </div>

              <div>
                <button
                  name="03"
                  value="03-03-2003"
                  onClick={e => this.handleSelection(e)}
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

                <div>{context.list3}</div>

                <div>
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name={`date-list3-non-mapped-1`}
                    value={this.state.list[0]}
                  />
                  <input
                    type="text"
                    name={`date-list3-non-mapped-2`}
                    value={this.state.list[1]}
                  />
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
          )
        }}
      </AppContext.Consumer>
    )
  }
}

IndexPage.contextType = AppContext

export default IndexPage
