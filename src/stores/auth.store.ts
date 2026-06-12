import { create } from "zustand";

interface AuthStore {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated:
    typeof window !== "undefined" ? !!localStorage.getItem("token") : false,

  login: () => {
    localStorage.setItem("token", "fake-jwt");

    set({
      isAuthenticated: true,
    });
  },

  logout: () => {
    localStorage.removeItem("token");

    set({
      isAuthenticated: false,
    });
  },
}));
