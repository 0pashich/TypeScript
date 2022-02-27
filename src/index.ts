import { renderSearchFormBlock, formHandler, search } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData, setUserData, getFavoritesAmount, setFavoritesAmount } from './local-storage.js'

window.addEventListener('DOMContentLoaded', () => {
  setUserData('Test', '/img/avatar.png');
  setFavoritesAmount(0);
  const userData = getUserData();
  const favoritesAmount = getFavoritesAmount();
  renderUserBlock(userData.username, userData.avatarUrl, favoritesAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  formHandler(search)
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
