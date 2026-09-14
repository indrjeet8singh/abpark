import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const API_URL = "https://ambedkar-backend.onrender.com/api/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userInfo");

    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("LocalStorage Error:", error);
      localStorage.removeItem("userInfo");
      return null;
    }
  });

  // =========================
  // LOGIN
  // =========================
  const login = async (email, password) => {
    const response = await axios.post(
      `${API_URL}/login`,
      {
        email,
        password,
      }
    );

    const data = response.data;

    console.log("Login Response:", data);

    if (data.success && data.user) {
      setUser(data.user);

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data.user)
      );

      if (data.user.token) {
        localStorage.setItem(
          "token",
          data.user.token
        );
      }
    }

    return data;
  };

  // =========================
  // REGISTER
  // =========================
  const register = async (
    name,
    email,
    password,
    role = "user"
  ) => {
    const response = await axios.post(
      `${API_URL}/register`,
      {
        name,
        email,
        password,
        role,
      }
    );

    const data = response.data;

    console.log("Register Response:", data);

    // Register ke baad user ko sirf normal user hone par
    // localStorage me save karenge.
    // Admin pehle OTP verify karega.
    if (
      data.success &&
      data.user &&
      data.user.role === "user"
    ) {
      setUser(data.user);

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data.user)
      );

      if (data.user.token) {
        localStorage.setItem(
          "token",
          data.user.token
        );
      }
    }

    return data;
  };

  // =========================
  // LOGOUT
  // =========================
  const logout = () => {
    setUser(null);

    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// =========================
// CUSTOM HOOK
// =========================
export const useAuth = () => {
  return useContext(AuthContext);
};