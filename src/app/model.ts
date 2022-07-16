export class Model {
  user;
  items :  TodoItem[];

  constructor() {
    this.user = 'Salman';
    this.items = [];
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
