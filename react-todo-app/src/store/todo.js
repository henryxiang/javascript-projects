import { observable, action } from 'mobx';

class Todo {
  @observable id = '';
  @observable name = '';
  @observable completed = false;

  constructor(id, name, completed) {
    this.id = id;
    this.name = name;
    this.completed = completed;
  }

  @action setName = (name) => {
    this.name = name;
  }

  @action toggleCompleted = () => {
    this.completed = !this.completed;
  }
}

export default Todo;
