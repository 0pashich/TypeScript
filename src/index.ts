import { renderSearchFormBlock, formHandler, search } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData, setUserData, getFavoritesAmount, setFavoritesAmount } from './local-storage.js'
import { getTodosByCount } from './todo-request.js'
import { MyCircle, MyRectangle } from './MyGraphics.js'

window.addEventListener('DOMContentLoaded', () => {
  setUserData('Test', '/img/avatar.png');
  setFavoritesAmount(0);
  const userData = getUserData();
  const favoritesAmount = getFavoritesAmount();
  renderUserBlock(userData.username, userData.avatarUrl, favoritesAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  formHandler(search, (val) => console.log(val))
  // getTodosByCount(10)



  const testArea = {
    topLeft: { X: 100, Y: 100 },
    bottomRight: { X: 200, Y: 200 }
  }

  const circle = new MyCircle(testArea)
  const rectangle = new MyRectangle(testArea)


  console.log(circle.move({ X: 100, Y: 100 }))
  console.log(circle)
  console.log(rectangle)




  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
