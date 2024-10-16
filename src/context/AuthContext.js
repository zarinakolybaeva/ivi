import React, { createContext, useContext, useState, useMemo } from 'react';


const AuthContext = createContext();


const mockUsers = [];

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null); 

    const signUp = (email, password) => {
     
        const newUser = { email, password };
        mockUsers.push(newUser); 
        setUser(newUser);
    };

    const logIn = (email, password) => {
     
        const foundUser = mockUsers.find(
            (user) => user.email === email && user.password === password
        );
        if (foundUser) {
            setUser(foundUser); 
        } else {
            throw new Error("Invalid credentials");
        }
    };

    const logOut = () => {
      
        setUser(null); 
    };

    const contextValue = useMemo(() => ({
        signUp,
        logIn,
        logOut,
        user
    }), [user]); 

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}


export function UserAuth() {
    return useContext(AuthContext);
}
