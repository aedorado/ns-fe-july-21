// Creating a context

import React from "react";
const AuthContext = React.createContext({ isLoggedIn: false, loginHandler: () => {} });
export default AuthContext;

// Using a context
// 1. Provide a context
// 2. We have to consume a context


