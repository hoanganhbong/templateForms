import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateForms';
  
  model: any = {};

  onSubmit(value) {
    console.log(value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
