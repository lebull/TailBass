import React, {  useState, createContext } from 'react'
const { Consumer: AuthConsumer, Provider } = createContext()

const AuthProvider = props => {
	const [auth] = useState({})
	return <Provider value={auth}>{props.children}</Provider>
}

export { AuthConsumer, AuthProvider }