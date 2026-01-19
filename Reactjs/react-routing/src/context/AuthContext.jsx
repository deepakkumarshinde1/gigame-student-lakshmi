import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem("users") || "[]");
  } catch (e) {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("authUser")) || null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("authUser", JSON.stringify(user));
    else localStorage.removeItem("authUser");
  }, [user]);

  function register({ name, email, password }) {
    const users = readUsers();
    if (users.find((u) => u.email === email)) {
      throw new Error("Email already registered");
    }

    const newUser = { id: Date.now().toString(), name, email, password };
    users.push(newUser);
    writeUsers(users);
    setUser({ id: newUser.id, name: newUser.name, email: newUser.email });
    return newUser;
  }

  function login({ email, password }) {
    const users = readUsers();
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) throw new Error("Invalid credentials");
    setUser({ id: found.id, name: found.name, email: found.email });
    return found;
  }

  function logout() {
    setUser(null);
  }

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
