import Cookies from 'js-cookie';
import React, { createContext, useContext, useState } from 'react';

const authCtxDefault = {
	userID:"",
	updateUserID: (userID: string) => {}
}

const authCtx = createContext(authCtxDefault);

export const AuthProvider: React.FC = ({children}) => {
	const [userID, setUserID] = useState(authCtxDefault.userID);

	const updateUserID = (userID:string) => {
		setUserID(userID);
		Cookies.set("userID", userID);
	}
	
	return (
		<authCtx.Provider value={{userID, updateUserID}}>
			{children}
		</authCtx.Provider>
	)
}

export const useUserID = () => {
	return useContext(authCtx);
}