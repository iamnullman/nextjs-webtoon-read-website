import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (localStorage.getItem("token")) {
          fetch("/api/v1/auth/@me", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "authorization": `Bearer ${localStorage.getItem("token")}`
            },
          })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
              if (data.success) {
                setUser(data.data);
                console.log(data.data);
                console.log(user);
              }
            }).catch((err) => {
                console.log(`Error: ${err}`);
            })
        }
      }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
    }

export const useUser = () => useContext(UserContext);
