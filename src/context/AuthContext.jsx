import React, { createContext, useEffect, useState } from "react";
import api from "../api/axios";

import { useEffect, useState } from "react";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const token = localStorage.getItem("token");

    if (!token) {
      setTimeout(() => {
        if (mounted) setLoading(false);
      }, 0);
      return;
    }

    api
      .get("/me")
      .then((res) => {
        if (mounted) setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        if (mounted) setUser(null);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
