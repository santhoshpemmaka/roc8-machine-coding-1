import React, {createContext, useContext, useReducer} from "react";
import {initialState, useReducerFun} from "./useReducer";

const DataContext = createContext({});

const DataProvider = ({children}) => {
	const [state, dispatch] = useReducer(useReducerFun, initialState);
	return (
		<DataContext.Provider value={{state, dispatch}}>
			{children}
		</DataContext.Provider>
	);
};

const useData = () => useContext(DataContext);

export {DataProvider, useData};
