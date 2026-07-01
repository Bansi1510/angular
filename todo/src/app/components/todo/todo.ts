import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {

  newtask = signal<string>("")
  items = signal<{ task: string; done: boolean }[]>([])

  addTodo() {
    if (this.newtask().trim() === "") return;

    this.items.update(items => [...items, { task: this.newtask(), done: false }]);

    this.newtask.set("")

  }
  deleteTodo(id: number) {
    this.items.update(items => items.filter((_, idx) => idx !== id))
  }
  markAsComplete(id: number) {
    this.items.update(items => items.map((item, index) => {
      if (index === id) {
        console.log(id, index)
        return { ...item, done: !item.done };
      }
      return item;
    }));
  }
}
