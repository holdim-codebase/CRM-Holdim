import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider & { getBasicAuthToken: () => string } = {
    login: ({ username, password }) => {
      localStorage.setItem("token", btoa(`${username}:${password}`));
      return Promise.resolve();
    },

    getBasicAuthToken: () => localStorage.getItem("token") || '',

    // вызывается, когда пользователь нажимает кнопку выхода
    logout: () => {
      localStorage.removeItem("token");
      return Promise.resolve();
    },
    // вызывается, когда API возвращает ошибку
    checkError: ({ status }) => {
      if (status === 401 || status === 403) {
        localStorage.removeItem("token");
        return Promise.reject();
      }
      return Promise.resolve();
    },
    // вызывается, когда пользователь переходит в новое место для проверки подлинности
    checkAuth: () => {
      return localStorage.getItem("token")
        ? Promise.resolve()
        : Promise.reject();
    },
    // вызывается, когда пользователь переходит в новое место для проверки разрешений/ролей
    getPermissions: () => Promise.resolve(),
  };