import React, {  useState, createContext } from 'react'
const { Consumer: AuthConsumer, Provider } = createContext()

const AuthProvider = ({children}) => {
	const [auth] = useState({})
	return <Provider value={auth}>Hi</Provider>
}

export { AuthConsumer, AuthProvider }