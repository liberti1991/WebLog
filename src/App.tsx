import { Component } from "react"

import Routes from "./routes/Routes"
import AppContextProvider from "./store/AppContextProvider"

class App extends Component {
	render() {
		return (
			<AppContextProvider>
				<Routes/>
			</AppContextProvider>
		)
	}
}

export default App

