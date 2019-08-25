import React, { Component } from "react"
import AppContext from "./AppContext"

export class AppProvider extends Component {
  state = {
    dateToBook: [],
    list3 : [],
    handleDateSelected: date => this.handleDateSelected(date),
  }

  handleDateSelected = date => {
    console.log(date)
    const dateToBook = [...this.state.dateToBook]
    let list3 = [...this.state.list3]

    dateToBook.push(date)

    list3 = dateToBook.map((date, index) => (
      <input
        type="text"
        name={`date-${index}-list3`}
        key={`date-${index}-list3`}
        value={date}
        readOnly={true}
      />
    ))
    this.setState({ dateToBook, list3 })
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
