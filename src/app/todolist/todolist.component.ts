import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @Input() todos: string[]
  @Input() onDelete: (index: number) => void
}
