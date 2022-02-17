export interface Todo {
  'userId': number
  'id': number
  'title': string
  'completed': boolean
}


export function getTodosByCount(count: number) {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then<Todo[]>(response => response.json())
    .then<Todo[]>(todoFullArray => Array.isArray(todoFullArray) ? Promise.resolve(todoFullArray.slice(0, count)) : Promise.reject('Todo Api error'))
    .then(todoArray => console.log(todoArray))
    .catch((error) => console.error(error))
}
