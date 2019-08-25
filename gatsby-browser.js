import React from "react"
import { AppProvider } from "./src/context/AppProvider"

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)