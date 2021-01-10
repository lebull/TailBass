// https://github.com/aws-amplify/amplify-js/issues/3090

import React, { useEffect, useState, createContext } from 'react'
import { Hub, Auth } from 'aws-amplify'
const { Consumer: AuthConsumer, Provider } = createContext()

const AUTHENTICATOR_AUTHSTATE = 'amplify-authenticator-authState'

const AuthProvider = props => {
	const [auth, setAuth] = useState({})
	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then(user => {
				console.log('Current user: ', user)
				localStorage.setItem(AUTHENTICATOR_AUTHSTATE, 'signedIn')
				setAuth({ state: 'signIn', user })
			})
			.catch(err => localStorage.getItem(AUTHENTICATOR_AUTHSTATE))
			.then(cachedAuthState => cachedAuthState === 'signedIn' && Auth.signOut())
	}, [])
	useEffect(() => {
		Hub.listen('auth', ({ payload }) => {
			const { event, data } = payload
			if (event === 'signOut') {
				setAuth({ state: event, user: null })
				localStorage.deleteItem(AUTHENTICATOR_AUTHSTATE)
				return
			}
			localStorage.setItem(AUTHENTICATOR_AUTHSTATE, 'signedIn')
			setAuth({ state: event, user: data })
		})
	}, [])
	return <Provider value={auth}>{props.children}</Provider>
}

export { AuthConsumer, AuthProvider }