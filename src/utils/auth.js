import Cookise from 'js-cookie'

const TokenKey = 'admin-Token'

export function getToken() {
  return Cookise.get(TokenKey)
}
export function setToken(token) {
  return Cookise.set(TokenKey,token)
}
export function removeToken() {
  return Cookise.remove(TokenKey)
}
