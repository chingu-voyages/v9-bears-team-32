import React from 'react';
import globalContextState from './globalContextState'

const GlobalContext = React.createContext<any>(globalContextState);

export default GlobalContext;
