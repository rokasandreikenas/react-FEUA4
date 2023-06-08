import { createContext, useState } from "react";

const UserContext = createContext({
  user: null,
  isLoggedIn: false,
  handleLogin: () => null,
  handleLogout: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null | {username: "test", password: "asd123"}
  const isLoggedIn = !!user; // null | {username: "test", password: "asd123"}
  // !!null => false
  // !!{username: "test", password: "asd123"} => true

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, handleLogin, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
