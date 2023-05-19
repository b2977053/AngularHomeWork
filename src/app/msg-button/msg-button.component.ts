import { Component } from '@angular/core';

@Component({
  selector: 'app-msg-button',
  template: `
  <input type="button" class="btn" value="All">
  <input type="button" class="btn" value="Active">
  <input type="button" class="btn" value="Completed">
  `,
  styles: [ 'input.btn { margin:0px 10px; width: 80px;}'
  ]
})
export class MsgButtonComponent {

}
