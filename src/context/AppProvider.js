import React, { Component } from "react"
import AppContext from "./AppContext"

export class AppProvider extends Component {
  state = {
    dateToBook: [],
    handleDateSelected: event => this.handleDateSelected(event),
  }

  handleDateSelected = event => {
    const date = event.target.value
    const dateToBook = [...this.state.dateToBook]

    dateToBook.push(date)

    this.setState({ dateToBook })
  }

  render() {
    console.log(this.state.dateToBook)
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
export default AppProvider
