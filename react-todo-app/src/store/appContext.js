import { action, observable } from 'mobx';
import Todo from './todo';

class AppContext {
  todoId = 3;
  @observable todoItems = [];

  @action addTodo(name, completed = false) {
    const todo = new Todo(this.todoId, name, completed);
    console.log(todo);
    this.todoItems.push({ id: this.todoId, name, completed });
    this.todoId += 1;
  }

  @action deleteTodo(id) {
    const index = this.todoItems.map(todo => todo.id).indexOf(id);
    this.todoItems.splice(index, 1);
  }

  @action deleteAllCompleted() {
    this.todoItems = this.todoItems.filter(todo => !todo.completed);
  }
}

// export default new AppContext();
export default AppContext;
