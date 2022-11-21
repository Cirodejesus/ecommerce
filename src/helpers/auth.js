import { TOKEN_NAME } from "../constants/env"

// se crea la autenticacion de la base de datos que va directamente al localstore 
export const token = () => localStorage.getItem(TOKEN_NAME)

// setItem - setToken
export const setToken = (token) => localStorage.setItem(TOKEN_NAME, token)

// deleteItem - deleteToken
export const deleteToken = (token) => localStorage.removeItem(TOKEN_NAME)

export const clearLocal = (token) => localStorage.clear()