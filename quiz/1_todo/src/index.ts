/* 보통 any 로 지정해놓고 구체적으로 추후에 하나씩 타입 지정하는것도 좋음 */

//type TODO = { id:number; title: string; done: boolean; }

// interface 를 통한 type 정의
interface Todo {
  id: number;
  title: string;
  done: boolean
};

// 배열 안에 object 로 들어가기 때문에 정의를 object[] 로 지정
let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos() : object[] {
  const todos = fetchTodoItems();
  return todos;
}

// return 타입이 없는 경우에는 void 가능
function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo ) :void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter( (item: Todo  ) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  const todoItems = fetchTodoItems();
  todoItems.forEach( item => addTodo(item));
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
