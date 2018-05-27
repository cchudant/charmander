import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.css']
})
export class TodoinputComponent {
  @Input() onAdd: (todo: string) => void
  input = ''

  onSubmit(event: Event) {
    this.onAdd(this.input)
    this.input = ''
    event.preventDefault()
  }
}
