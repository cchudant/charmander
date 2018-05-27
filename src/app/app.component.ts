import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = ['learn Angular!']

  onAdd(todo: string) {
    this.todos.push(todo)
  }

  onDelete(index: number) {
    this.todos.splice(index, 1)
  }
}
