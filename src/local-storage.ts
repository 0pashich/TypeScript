export interface UserData {
  username: string
  avatarUrl: string
}

export function setUserData(username: string, avatarUrl: string) {
  localStorage.setItem('user', JSON.stringify({ username: username, avatarUrl: avatarUrl }));
}

export function getUserData(): UserData {
  const userData: UserData = JSON.parse(localStorage.getItem('user'))
  return userData && userData.username && userData.avatarUrl ? userData : { username: '', avatarUrl: '' }
}

export function setFavoritesAmount(favoritesAmount: number): void {
  localStorage.setItem('favoritesAmount', String(favoritesAmount))
}

export function getFavoritesAmount():number {
  return isNaN(Number(localStorage.getItem('favoritesAmount'))) ? 0 : parseInt(localStorage.getItem('favoritesAmount'))
}
