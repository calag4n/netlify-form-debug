import React, { Component } from "react"
import AppContext from "./AppContext"

export class AppProvider extends Component {
  state = {
    dateToBook: [],
    handleDateSelected: date => this.handleDateSelected(date),
  }

  handleDateSelected = date => {
    const dateToBook = [...this.state.dateToBook]

    dateToBook.push(date)

    this.setState({ dateToBook })
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
export default AppProvider
