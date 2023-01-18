
// Чтобы включить эту стратегию аутентификации,
// передайте authProviderкомпоненту <Admin>:

export const authProvider = {
    // вызывается, когда пользователь пытается войти в систему
    login: ({ username }) => {
      localStorage.setItem("username", username);
      // accept all username/password combinations
      return Promise.resolve();
    },
    // вызывается, когда пользователь нажимает кнопку выхода
    logout: () => {
      localStorage.removeItem("username");
      return Promise.resolve();
    },
    // вызывается, когда API возвращает ошибку
    checkError: ({ status }) => {
      if (status === 401 || status === 403) {
        localStorage.removeItem("username");
        return Promise.reject();
      }
      return Promise.resolve();
    },
    // вызывается, когда пользователь переходит в новое место для проверки подлинности
    checkAuth: () => {
      return localStorage.getItem("username")
        ? Promise.resolve()
        : Promise.reject();
    },
    // вызывается, когда пользователь переходит в новое место для проверки разрешений/ролей
    getPermissions: () => Promise.resolve(),
  };